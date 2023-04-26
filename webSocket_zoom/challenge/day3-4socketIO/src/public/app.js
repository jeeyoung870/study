const socket = io();

const welcome = document.getElementById("welcome");
const enterform = welcome.querySelector("form");
const room = document.getElementById("room");
const h3 = room.querySelector("h3");

room.hidden = true;

let roomName;

socket.on("room_change", (rooms) => {
    const roomList = welcome.querySelector("ul");
    roomList.innerHTML = "";
    rooms.forEach(room => {
        const li = document.createElement("li");
        li.innerText = room;
        roomList.append(li);
    });
});
socket.on("welcome", (userName, userCount) => {
    paintRoomH3(userCount);
    addMessage(`${userName} joined!`);
});
socket.on("new_msg", addMessage);
socket.on("bye", (userName, userCount) => {
    paintRoomH3(userCount);
    addMessage(`${userName} left!`);
});

// ------ end of socket.on() -----------------------


function addMessage(message){
    const ul = room.querySelector("ul");
    const li = document.createElement("li");
    li.innerText = message;
    ul.appendChild(li);
}
function handleMsgSubmit(event){
    event.preventDefault();
    const input = room.querySelector("#msg input");
    const inputVal = input.value;
    socket.emit("new_msg", inputVal, roomName, ()=>{
        addMessage(`You > ${inputVal}`);
    });
    input.value = "";
}
function paintRoomH3(usercount){
    h3.innerText = `Room ${roomName} (${usercount} users)`;
}
function showRoom(usercount){
    room.hidden = false;
    welcome.hidden = true;
    paintRoomH3(usercount);
    const msgForm = room.querySelector("#msg");
    msgForm.addEventListener("submit", handleMsgSubmit);
}
function handleRoomSubmit(event){
    event.preventDefault();
    const roomInput = enterform.querySelector("input:first-child");
    const nameInput = enterform.querySelector("input:nth-child(2)");
    const nickname = nameInput.value;
    socket.emit("enterRoom", roomInput.value, nickname, showRoom);
    roomName = roomInput.value;
    nameInput.value = "";
    roomInput.value = "";
}

enterform.addEventListener("submit", handleRoomSubmit);