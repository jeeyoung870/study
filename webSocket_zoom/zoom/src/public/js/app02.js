const msgList = document.querySelector("ul");
const msgForm = document.querySelector("#msg");
const nickForm = document.querySelector("#nick");
// front -> back 으로 WebSocket 연결하기(인자로 wss용 url을 받는다.)
// 여기의 socket : app.js(front)->server.js(back)에 해당하는 연결을 의미함.
// server.js의 handleConnection함수 인자로 들어가는 socket객체 정보를 구성함.
const socket = new WebSocket(`ws://${window.location.host}`);
// 웹소켓 연결시
socket.addEventListener("open", () => {
    console.log("Connected to Server ✔");
});
// 메시지 수신시
socket.addEventListener("message", (message) => {
    const li = document.createElement("li");
    li.innerText = message.data;
    msgList.append(li);
});
// 연결 해제시
socket.addEventListener("close", () => {
    console.log("Disconnected from Server ❌");
});
// setTimeout(() => {
//     // front -> back 으로 메시지 전송하기
//     socket.send("Hello from the Browser!!🖐");
// }, 10000);

// send() 는 인자로 string만 받기 때문에 JSON객체를 string화해준다.
function makeMessage(type, payload) {
    const msg = {type, payload};
    return JSON.stringify(msg);
}
function handleSubmit(event) {
    event.preventDefault();
    const input = msgForm.querySelector("input");
    socket.send(makeMessage("new_msg", input.value));
    input.value = "";
}
function handleNickSubmit(event) {
    event.preventDefault();
    const input = nickForm.querySelector("input");
    socket.send(makeMessage("nickname", input.value));
    input.value = "";
}

msgForm.addEventListener("submit", handleSubmit);
nickForm.addEventListener("submit", handleNickSubmit);