// event
// element 를 console.dir();로 봤을때 파라미터에 on~ 이라고 된것들이 event객체이다.
// ex) onclick. onmouseenter 등.. addEventListener() 인자로 사용할땐 on을 떼고 쓴다.

// document객체를 통해 style 변경하기
const title = document.querySelector("div .hello:first-child h1:last-child");
const title2 = document.querySelector("div .hello:first-child h1:first-child");
title.style.color = "blue";
console.dir(title);

function clickTitlehandle() {
    title.style.color = "magenta";
}
function handleMouseEnter(){
    title.innerText = "Mouse is HERE";
    title.style.color = "purple";
}
function handleMouseLeave(){
    title.innerText = "Mouse is GONE";
    title.style.color = "blue";
}
function dontCopyThis() {
    alert("You can't copy this.");
}
// event listener 추가하기
// addEventListener("listen할event종류", 실행함수이름);
// clickTitlehandle() <-이렇게 작성하지X. ()는 실행버튼과 같은데, 코드를 읽는 즉시 실행할게 아니라, listener에 함수를 주고 이벤트 발생시 실행시키기 위해.
title.addEventListener("click", clickTitlehandle);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
title2.addEventListener("beforecopy", dontCopyThis);