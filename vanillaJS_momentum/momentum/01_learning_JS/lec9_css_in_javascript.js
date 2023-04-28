// js에서 css 조작

const h1 = document.querySelector("div .hello:first-child h1:last-child");
const h12 = document.querySelector("div .hello:nth-child(2) h1:first-child");

function handleTitleClick(){
    const currentColor = h1.style.color;
    let newColor;
    if(currentColor === "blue") {
        newColor = "tomato";
    } else {
        newColor = "blue";
    }
    h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick);

// style.css 와 연동해서 조작하기
/*
// 이미 적용된 class를 변경하는것이 아닌 복수개의 클래스 적용하는 방법. classList 사용.
function handleClickUsingClassname() {
    const clickedClass = "clicked";
    if(h12.classList.contains(clickedClass)) {
        console.log(h12.classList);
        h12.classList.remove(clickedClass);
    } else { 
        h12.classList.add(clickedClass);
    }
}
*/
// 위 함수의 if와 다음 함수의 toggle()은 같은 역할을 한다.
function handleClickUsingClassname() {
    h12.classList.toggle("clicked");
}

h12.addEventListener("click", handleClickUsingClassname);