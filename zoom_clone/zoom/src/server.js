// #3 VIDEO CALL
import http from "http";
import {Server} from "socket.io";         // admin-ui 적용시
import {instrument} from "@socket.io/admin-ui";
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
const httpServer = http.createServer(app);
// SocketIO 서버 만들기
const ioServer = new Server(httpServer, {     // admin-ui 적용시
    cors: {
        origin: ["https://admin.socket.io"],
        credentials: true
    }
});
instrument(ioServer, {
    auth: false
});





httpServer.listen(3000, handleListen);
