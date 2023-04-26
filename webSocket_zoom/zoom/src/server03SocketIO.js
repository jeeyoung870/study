// #2 SOCKETIO
import http from "http";
// import WebSocket from "ws";

// import SocketIO from "socket.io";        // admin-ui 적용전
import {Server} from "socket.io";         // admin-ui 적용시
import {instrument} from "@socket.io/admin-ui";
import express from "express";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/public/views");
app.use("/public", express.static(__dirname + "/public"));

console.log(__dirname+ "/public/views");

app.get("/", (req, res) => {res.render("home03");});
app.get("/*", (req, res) => {res.redirect("/");});

const handleListen = () => {console.log(`Listening on http://localhost:3000`);}

// express app 객체로 http 서버 만들기
const httpServer = http.createServer(app);
// SocketIO 서버 만들기
// const ioServer = SocketIO(httpServer);  // admin-ui 적용전
const ioServer = new Server(httpServer, {     // admin-ui 적용시
    cors: {
        origin: ["https://admin.socket.io"],
        credentials: true
    }
});
instrument(ioServer, {
    auth: false
});

ioServer.on("connection", socket => {
    refreshRoomList();
    socket["nickname"] = "Anonymous";
    // app.js에서 socket.emit()에 사용한 이벤트명과 똑같이 해주면 해당이벤트를 처리할 수 있다.
    // done = emit에서 바인딩한 마지막 인자 = 콜백 함수.
    socket.on("enterRoom", (roomName,username, done) => {
        // console.log(msg.payload, id, num);
        socket.join(roomName);
        socket["nickname"] = username;
        console.log(socket.rooms);  // {소켓privateRoom name(=socket.id), roomName} 출력
        const userCount = countRoom(roomName);
        done(userCount);
        socket.to(roomName).emit("welcome", username, userCount);
        refreshRoomList();
    });
    socket.on("disconnecting", () => {
        // rooms.forEach하게되면 1)내소켓아이디 2)방이름 이 온다.
        // 그러므로 나+방안의모두 에게 bye이벤트가 전송되는것. ('나'는 방을 즉시 나가므로 이벤트 실행되는게 보이진 않음)
        socket.rooms.forEach(room => socket.to(room).emit("bye", socket.nickname, countRoom(room)-1));
    });
    socket.on("disconnect", () => {
        // 아무 socket도없는 방은 삭제되고 보여짐.
        ioServer.sockets.emit("room_change", findPublicRooms());  
    });
    socket.on("new_message", (newMsg,roomName, done) => {
        const sendMsg = `${socket.nickname} > ${newMsg}`;
        socket.to(roomName).emit("new_message", sendMsg);
        done();
    });
    // onAny() : 모든 event에 반응함
    socket.onAny((event) => {
        console.log(`Socket Event : ${event}`);
    });
});

function findPublicRooms(){
    // const sids = ioServer.sockets.adapter.sids;
    // const rooms = ioServer.sockets.adapter.rooms;
    const {sockets: {adapter: {sids, rooms}}} = ioServer;   //위 두줄 코드의 선언과 같음.
    const publicRooms = [];
    rooms.forEach((val, key) => {
        // rooms=private+public / sids=private only 이므로 sids에 없는 방(=public)을 찾는다.
        if(sids.get(key) === undefined){
            publicRooms.push(key);
        } 
    });
    return publicRooms;
}
function countRoom(roomName){
    // ?기호 사용: 
    return ioServer.sockets.adapter.rooms.get(roomName)?.size;
}
function refreshRoomList(){
    ioServer.sockets.emit("room_change", findPublicRooms());    //모든 소켓에 이벤트전송
}


/*
wss.on("connection", (socket) => {
    // console.log(socket);
    console.log("Connected to Browser ✔");

    sockets.push(socket);
    socket["nickname"] = "Anonymous";   
    socket.on("close", () => {
        console.log("Disconnected from Browser ❌");
    });
    socket.on("message", (message) => {
        const msg = JSON.parse(message);    //String -> Object
        switch(msg.type) {
            case "new_msg":
                sockets.forEach(sck => {
                    sck.send(`${socket.nickname} : ${msg.payload}`);
                });
                break; 
            case "nickname":
                socket.nickname = msg.payload;
        }
    });
});
const sockets = [];
*/

httpServer.listen(3000, handleListen);
