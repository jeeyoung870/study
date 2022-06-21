// #1 CHAT WITH WEBSOCKETS
import http from "http";
import WebSocket from "ws";
import express from "express";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/public/views");
app.use("/public", express.static(__dirname + "/public"));

console.log(__dirname+ "/public/views");

app.get("/", (req, res) => {res.render("home");});
app.get("/*", (req, res) => {res.redirect("/");});

const handleListen = () => {console.log(`Listening on http://localhost:3000`);}

// express app 객체로 http 서버 만들기
const server = http.createServer(app);
// 같은 서버에서 WebSocket 로도 동작 가능하도록 server를 인자로 넣어줌. (인자는 optional임)
// http://localhost:3000 와 ws://localhost:3000 모두 처리가능
const wss = new WebSocket.Server({ server });

// wss.on() : front의 addEventListener와 비슷한 역할을 한다.
// WebSocket의 callback함수로 WebSocket(socket)객체를 받는다. 
// socket객체 : 서버와 연결된 user정보, user와의 연결 정보를 제공함
//              여기선 server.js(back)->app.js(front)에 해당하는 연결을 의미함.
wss.on("connection", (socket) => {
    // console.log(socket);
    console.log("Connected to Browser ✔");
    
    sockets.push(socket);
    // 각각의 socket들을 구별하기 위해 socket객체에 nickname item을 새로 추가
    socket["nickname"] = "Anonymous";   
    // 연결 해제시 동작
    socket.on("close", () => {
        console.log("Disconnected from Browser ❌");
    });
    // 브라우저에서 메시지 수신시 동작
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
        // sockets.forEach(sck => {
        //     sck.send(message.toString('utf-8')); // 강의에서는 toString없이도 되던데 난 blob객체로 들어와서 parse필요함
        // });
    });
});
const sockets = [];

server.listen(3000, handleListen);
