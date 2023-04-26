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
        audio: true, video: {facingMode: "user"}
    };
    // user가 카메라기기를 select했을경우
    const camConstraints = {
        audio: true, video: {deviceId: {exact: deviceId} }
    };
    try{
        myStream = await navigator.mediaDevices.getUserMedia(
            deviceId ? camConstraints : initialConstraints
        );
        myFace.srcObject = myStream;
        if (!deviceId) {
            await getCameras();     //맨처음 한번만 실행됨.
        }
    }catch(e){
        console.log(e);
    }
}
getMedia();

async function handleCameraChange() {
    // console.log(cameraSelect.value);
    await getMedia(cameraSelect.value);
}
function handleMuteBtnClick() {
    adTracks = myStream.getAudioTracks();   // stream이 찾은 모든audio기기를 array로 반환함.
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
function handleCameraBtnClick() {
    vdTracks = myStream.getVideoTracks();
    vdTracks.forEach((track) => {
        track.enabled = !track.enabled;
    });
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