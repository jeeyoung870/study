// #0 INTRODUCTION
import express from "express";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/public/views");
app.use("/public", express.static(__dirname + "/public"));

console.log("hello");
console.log(__dirname+ "/public/views");

app.get("/", (req, res) => {res.render("home");});
// 다른 url 요청해도 home으로만 연결
app.get("/*", (req, res) => {res.redirect("/");});

const handleListen = () => {console.log(`Listening on http://localhost:3000`);}
app.listen(3000, handleListen);