// Put all your frontend code here.
const msgList = document.querySelector("ul");
const nickForm = document.getElementById("nick");
const msgForm = document.getElementById("msg");
const welcomeText = document.querySelector("h2");

const socket = new WebSocket(`ws://${window.location.host}`);

socket.addEventListener("open", () =>{
    console.log("Connected to Server");
});
socket.addEventListener("close", () => {
    console.log("Disconnected from Server");
});
socket.addEventListener("message", (message) => {
    const li = document.createElement("li");
    li.innerText = message.data;
    msgList.append(li);
});

//===============================================
msgForm.hidden = true;
msgList.hidden = true;

function makeSendingMsg(type, value){
    const msg = {type, value};
    const jsonMsg = JSON.stringify(msg);
    return jsonMsg;
}
function handleMsgSubmit(event) {
    event.preventDefault();
    const msgInput = msgForm.querySelector("input");
    socket.send(makeSendingMsg("newMsg", msgInput.value));

    msgInput.value = "";
}
function handleNickSubmit(event) {
    event.preventDefault();
    const nickInput = nickForm.querySelector("input");
    socket.send(makeSendingMsg("nickname", nickInput.value));

    msgForm.hidden = false;
    msgList.hidden = false;
    nickForm.hidden = true;
    welcomeText.innerText = `Welcome, ${nickInput.value}😆`;
    nickInput.value = "";
}

msgForm.addEventListener("submit", handleMsgSubmit);
nickForm.addEventListener("submit", handleNickSubmit);
