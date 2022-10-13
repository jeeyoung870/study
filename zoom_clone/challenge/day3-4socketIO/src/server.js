// SocketIO 를 사용해 room, nickname을 지원하는 simple chatroom 구현하기.

import http from "http";
import SocketIO from "socket.io";
import express from "express";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (_, res) => res.render("home"));
app.get("/*", (_, res) => res.redirect("/"));

const httpServer = http.createServer(app);
const ioServer = SocketIO(httpServer);

// ------------------------------------------------------------------
ioServer.on("connection", (socket) => {
  refreshRoomList();
  socket["nickname"] = "Anonymous";

  socket.on("enterRoom", (roomName, userName, done) => {
    socket.join(roomName);
    socket.nickname = userName;
    const userCount = countRoomUsers(roomName);
    done(userCount);
    socket.to(roomName).emit("welcome", userName, userCount);
    refreshRoomList();
  });
  socket.on("new_msg", (newMsg, roomName, done) =>{
    const sendMsg = `${socket.nickname} > ${newMsg}`;
    socket.to(roomName).emit("new_msg", sendMsg);
    done();
  });
  socket.on("disconnecting", ()=>{
    socket.rooms.forEach(room => {
      socket.to(room).emit("bye", socket.nickname, countRoomUsers(room)-1 );
    });
  });
  socket.on("disconnect",  ()=>{
    refreshRoomList();
  });

});

function countRoomUsers(roomName){  //방안의 user세기
  return ioServer.sockets.adapter.rooms.get(roomName)?.size;
}
function findPublicRooms(){
  const {sockets: {adapter: {sids, rooms}}} = ioServer;
  const publicRooms = [];
  rooms.forEach((val, key) => {
      // rooms=private+public / sids=private only
      if(sids.get(key) === undefined){
          publicRooms.push(key);
      } 
  });
  return publicRooms;
}
function refreshRoomList(){
  ioServer.sockets.emit("room_change", findPublicRooms());
}






const handleListen = () => console.log(`Listening on http://localhost:3000`);
// httpServer.listen(process.env.PORT, handleListen);
httpServer.listen(3000, handleListen);
