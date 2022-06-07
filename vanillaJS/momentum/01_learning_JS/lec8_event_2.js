// event 2
// element 를 console.dir();로 봤을때 파라미터에 on~ 이라고 된것들이 event객체이다.
// ex) onclick. onmouseenter 등.. addEventListener() 인자로 사용할땐 on을 떼고 쓴다.

// document객체를 통해 style 변경하기
const h1 = document.querySelector("div .hello:first-child h1:last-child");
const h12 = document.querySelector("div .hello:first-child h1:first-child");
h1.style.color = "blue";
console.dir(h1);

function clickh1handle() {
    h1.style.color = "magenta";
    // removeEventListener 로 기존에있던 event 삭제도 가능
    h1.removeEventListener("mouseleave", handleMouseLeave);
    h1.removeEventListener("mouseenter", handleMouseEnter);
}
function handleMouseEnter(){
    h1.innerText = "Mouse is HERE";
    h1.style.color = "purple";
}
function handleMouseLeave(){
    h1.innerText = "Mouse is GONE";
    h1.style.color = "blue";
}
function dontCopyThis() {
    alert("You can't copy this.");
}

h1.addEventListener("click", clickh1handle);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);
h12.addEventListener("beforecopy", dontCopyThis);
/*
// 아래 코드는 위 addEventListener() 기능과 똑같음.
h1.onclick = clickh1handle;
h1.onmouseenter = handleMouseEnter;
h1.onmouseleave = handleMouseLeave;
h12.onbeforecopy = dontCopyThis;
*/


// ------------------------------------------------------------------
// window 객체와 body 사용
function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}
window.addEventListener("resize", handleWindowResize);

// ------------------------------------------------------------------
// window 클립보드 관련 event
// oncopy / oncut / onpaste
function handleWindowCopy() {
    alert("Copier!!!");
}
window.addEventListener("copy", handleWindowCopy);
// ------------------------------------------------------------------
// window의 wi-fi connection 관련 event
// offline / online
function handleWindowOffline(){
    alert("SOS : no WI-FI!");
}
function handleWindowOnline() {
    alert("Network ALL GOOOOD");
}
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
