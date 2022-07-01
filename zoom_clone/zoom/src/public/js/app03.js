// io() : front > back 연결하는 소켓생성
// view에 script(src="/socket.io/socket.io.js") 걸어줘서 사용가능해짐.
// 각각의 브라우저에서 접속하면 브라우저마다 각자다른 소켓이 할당됨
const socket = io();

const welcome = document.getElementById("welcome");
const enterform = welcome.querySelector("form");
const room = document.getElementById("room");
const h3 = room.querySelector("h3");

room.hidden = true;

let roomName;

function handleMsgSubmit(event) {
    event.preventDefault();
    const input = room.querySelector("#msg input");
    const inputVal = input.value;
    socket.emit("new_message", inputVal, roomName, ()=>{
        addMessage(`You > ${inputVal}`);
    });
    input.value = "";
}
function addMessage(message) {
    const ul = room.querySelector("ul");
    const li = document.createElement("li");
    li.innerText = message;
    ul.appendChild(li);
}
function showRoom(usercount) {
    welcome.hidden = true;
    room.hidden = false;
    paintRoomH3(usercount);
    const msgForm = room.querySelector("#msg");
    msgForm.addEventListener("submit", handleMsgSubmit);
}
function handleRoomSubmit(event) {
    event.preventDefault();
    const roomInput = enterform.querySelector("input:first-child");
    const nameInput = enterform.querySelector("input:nth-child(2)");
    const nickname = nameInput.value;
    // ws의 socket.send() 역할을 하는 emit()
    // ws는 이벤트가 한정되어 있고("message") String만 보낼수 있었지만 / emit은 원하는 이벤트명을 지정하고, 원하는 형태의 Object를 전달할 수 있다.
    // 마지막 인자로 콜백함수를 바인딩 가능하다.(Optional)
    socket.emit(
        "enterRoom", 
        roomInput.value, nickname,
        showRoom
    );
    roomName = roomInput.value;
    nameInput.value = "";
    roomInput.value = "";
}
function paintRoomH3(userCount) {
    h3.innerText = `Room : ${roomName} (${userCount} users)`;
}

enterform.addEventListener("submit", handleRoomSubmit);

socket.on("welcome", (user, newCount) => {
    paintRoomH3(newCount);
    addMessage(`${user} joined!`);
});
socket.on("bye", (user, newCount) => {
    paintRoomH3(newCount);
    addMessage(`${user} left!`);
});
// (newMsg) => {addMessage(newMsg);} 쓴것과 같은 표현임.
socket.on("new_message", addMessage);

socket.on("room_change", (rooms) => {
    const roomList = welcome.querySelector("ul");
    roomList.innerHTML = "";
    rooms.forEach(room => {
        const li = document.createElement("li");
        li.innerText = room;
        roomList.append(li);
    });
});