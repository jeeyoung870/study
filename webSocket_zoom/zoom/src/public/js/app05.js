const socket = io();

const myFace = document.getElementById("myFace");
//console.dir(myFace);
const muteBtn = document.getElementById("mute");
const cameraBtn = document.getElementById("camera");
const cameraSelect = document.getElementById("cameras");

let myStream;
let muted = false;
let cameraOff = false;

async function getCameras() {
    try{
        const devices = await navigator.mediaDevices.enumerateDevices();
        const cameras = devices.filter(device => {
            return device.kind === "videoinput";    // true 리턴하는 요소로만 배열 만들어줌
        });
        const currentCam = myStream.getVideoTracks()[0];
        // console.log(cameras);
        // user가 카메라 선택할 수 있게 video기기들을 selectbox option으로 추가해준다.
        cameras.forEach(camera => {
            const option = document.createElement("option");
            option.value = camera.deviceId;
            option.innerText = camera.label;
            if(currentCam.label === camera.label) {
                option.selected = true; //새로고침전에 선택했던 카메라를 선택한상태로 보여줌
            }
            cameraSelect.appendChild(option);
        });
    }catch(e){
        console.log(e);
    }
}
async function getMedia(deviceId){
    // 맨처음(deviceId없을때)카메라 = 셀카모드
    const initialConstraints = {
        audio: true/*!muted*/, video: {facingMode: "user"}
    };
    // user가 카메라기기를 select했을경우
    const camConstraints = {
        audio: !muted, video: {deviceId: {exact: deviceId} }
    };
    console.dir(initialConstraints);
    console.log(camConstraints);
    try{
        myStream = await navigator.mediaDevices.getUserMedia(
            deviceId ? camConstraints : initialConstraints
        );
        if(cameraOff){  //true일경우 video 꺼주기
            toggleMyVideo();
        }
        myFace.srcObject = myStream;
        if (!deviceId) {
            await getCameras();     //맨처음 한번만 실행됨.
        }
    }catch(e){
        console.log(e);
    }
}
// getMedia();

async function handleCameraChange() {
    await getMedia(cameraSelect.value); //내 브라우저 video트랙 변경
    // RTCPeerConnection 되어있을 경우, 상대 브라우저에 트랙 동기화하기 위한 코드
    if(myPeerConnection) {
        const videoSender = myPeerConnection.getSenders()
            .find(sender => {
                return sender.track.kind === "video";
            });
        const changedVideoTrack = myStream.getVideoTracks()[0];
        videoSender.replaceTrack(changedVideoTrack);
    }
}
function handleMuteBtnClick() {
    const adTracks = myStream.getAudioTracks();   // stream이 찾은 모든audio기기를 array로 반환함.
    adTracks.forEach((track) => {
        track.enabled = !track.enabled;     //true를 false로 || false를 true로 변경
    });
    if(!muted){
        muteBtn.innerText = "Unmute";
        muted = true;
    } else {
        muteBtn.innerText = "Mute";
        muted = false;
    }
    // console.log(adTracks);
}
function toggleMyVideo() {
    const vdTracks = myStream.getVideoTracks();
    vdTracks.forEach((track) => {
        track.enabled = !track.enabled;
    });
}
function handleCameraBtnClick() {
    toggleMyVideo();
    if(!cameraOff){
        cameraBtn.innerText = "Camera On";
        cameraOff = true;
    } else {
        cameraBtn.innerText = "Camera Off";
        cameraOff = false;
    }
    // console.dir(vdTracks);
}

muteBtn.addEventListener("click", handleMuteBtnClick);
cameraBtn.addEventListener("click", handleCameraBtnClick);
cameraSelect.addEventListener("input", handleCameraChange);


//-----------------------------------------------------------------------
// Welcome Form (join a room) && peer Connection
const welcome = document.getElementById("welcome"); 
const welcomeForm = welcome.querySelector("form");
const call = document.getElementById("call"); 
call.hidden = true;

let roomName;
let myPeerConnection;

async function initCall() {
    welcome.hidden = true;
    call.hidden = false;
    await getMedia();
    makeConnection();
}
async function handleWelcomeSubmit(event){
    event.preventDefault();
    const input = welcomeForm.querySelector("input");
    await initCall();
    socket.emit("join_room", input.value);
    roomName = input.value;
    input.value = "";
}

welcomeForm.addEventListener("submit", handleWelcomeSubmit);


// Socket Code

// Peer A (처음 참가한 소켓에서 실행)
socket.on("welcome", async () => {    //같은 방에 상대 사용자가 입장할때마다 실행됨
    const offer = await myPeerConnection.createOffer();
    myPeerConnection.setLocalDescription(offer);
    console.log("send the offer");
    socket.emit("offer", offer, roomName);
});
// Peer B ((나중 참가한 소켓에서 실행))
socket.on("offer", async (offer) => {
    console.log("received the offer");
    myPeerConnection.setRemoteDescription(offer);
    const answer = await myPeerConnection.createAnswer();
    myPeerConnection.setLocalDescription(answer);
    socket.emit("answer", answer, roomName);
    console.log("send the answer");
});
// Peer A
socket.on("answer", (answer) => {
    console.log("received the answer");
    myPeerConnection.setRemoteDescription(answer);
});
// Both
socket.on("ice", iceCan => {
    console.log("received ice candidate");
    myPeerConnection.addIceCandidate(iceCan);
});


// WebRTC Code
function makeConnection() {
    // iceServers에 xirsys의 STUN서버 적용해서 peerconnection 작성
    myPeerConnection = new RTCPeerConnection({
        iceServers: [{
            urls: [ "stun:ntk-turn-2.xirsys.com" ]
         }, {
            username: "mgINYO6pj64FzxNSrDUdrY3mVjEc8aCgjMyEjBefTNQNo_WNa-lndfPajbnjnGlSAAAAAGLKeOBqeTg3MA==",
            credential: "e0e88ac2-001d-11ed-8e13-0242ac120004",
            urls: [
                "turn:ntk-turn-2.xirsys.com:80?transport=udp",
                "turn:ntk-turn-2.xirsys.com:3478?transport=udp",
                "turn:ntk-turn-2.xirsys.com:80?transport=tcp",
                "turn:ntk-turn-2.xirsys.com:3478?transport=tcp",
                "turns:ntk-turn-2.xirsys.com:443?transport=tcp",
                "turns:ntk-turn-2.xirsys.com:5349?transport=tcp"
            ]
         }]
    });
    myPeerConnection.addEventListener("icecandidate", handleIce);
    myPeerConnection.addEventListener("addstream", handleAddStream);
    // 브라우저에서 "addstream" 이벤트 지원하지 않을 경우 사용: 
    // myPeerConnection.addEventListener("track", handleAddStream);

    const tracks = myStream.getTracks(); //현재 선택된 오디오기기1, 비디오기기1을 array로 반환함.
    tracks.forEach(track => {
        myPeerConnection.addTrack(track, myStream);
    });
}

function handleIce(data) {
    console.log("sent ice candidate");
    socket.emit("ice", data.candidate, roomName);
}
function handleAddStream(data) {
    console.log("got a stream from my peer");
    // console.log("Peer's Stream : ", data.stream);
    // console.log("My Stream : ", myStream);
    const peerFace = document.getElementById("peerFace");
    peerFace.srcObject = data.stream;
}
