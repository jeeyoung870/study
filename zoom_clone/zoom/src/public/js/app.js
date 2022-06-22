// io() : front > back 연결하는 소켓생성
// view에 script(src="/socket.io/socket.io.js") 걸어줘서 사용가능해짐.
const socket = io();

const welcome = document.getElementById("welcome");
const form = welcome.querySelector("form");
const room = document.getElementById("room");

room.hidden = true;

let roomName;

function showRoom() {
    welcome.hidden = true;
    room.hidden = false;
    const h3 = room.querySelector("h3");
    h3.innerText = `Room : ${roomName}`;
}
function handleRoomSubmit(event) {
    event.preventDefault();
    const input = form.querySelector("input");
    // ws의 socket.send() 역할을 하는 emit()
    // ws는 이벤트가 한정되어 있고("message") String만 보낼수 있었지만 / emit은 원하는 이벤트명을 지정하고, 원하는 형태의 Object를 전달할 수 있다.
    // 마지막 인자로 콜백함수를 바인딩 가능하다.(Optional)
    socket.emit(
        "enterRoom", 
        input.value,
        showRoom
    );
    roomName = input.value;
    input.value = "";
}

form.addEventListener("submit", handleRoomSubmit);