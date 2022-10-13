import http from "http";
import WebSocket from "ws";
import express from "express";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (_, res) => res.render("home"));
app.get("/*", (_, res) => res.redirect("/"));

const handleListen = () => console.log(`Listening on http://localhost:3000`);

const server = http.createServer(app);
const wss = new WebSocket.Server({server});

// Put all your backend code here.
const sockets = [];

wss.on("connection", (socket) => {
    console.log("connected to front");
    socket["nickname"] = "Anonymous";
    sockets.push(socket);

    socket.on("message", (message)=>{
        const msg = JSON.parse(message);
        switch(msg.type) {
            case "nickname":
                socket.nickname = msg.value;
                sendMsgToAll(`${socket.nickname} entered!!`);
                break;
            default:        // case "newMsg":
                sendMsgToAll(`${socket.nickname} > ${msg.value}`);
        }
    });
    socket.on("close", () =>{
        console.log("Disconnected from front");
        sendMsgToAll(`${socket.nickname} left!!`);
    });
});

function sendMsgToAll(sendingMsg){
    sockets.forEach(sck => {
        sck.send(sendingMsg);
    });
}

server.listen(3000, handleListen);
