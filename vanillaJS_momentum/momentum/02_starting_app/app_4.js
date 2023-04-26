
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
// 반복되는 문자들은 const로 변수지정한다.
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// event function이 실행될때, ()안의 첫번째 인자 = 탐지된 event객체 (ex) SubmitEvent)
// 무조건 첫번째인자로 돌아옴. tomato
function onLoginSubmit(event){
    event.preventDefault();    // 새로고침 방지
    console.log(event);

    loginForm.classList.add(HIDDEN_CLASSNAME);

    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);

    paintGreetings(username);
}

/*
localStorage 사용하기
localStorage는 브라우저에서 제공되는 db처럼 사용할 수 있는 api객체
local storage는 브라우저 개발자모드 > application > storage 탭에서 볼 수 있다.
사용 메서드 예시 : 

localStorage.setItem('myCat', 'Tom');   // key와 value로 localStorage에 저장됨.
localStorage.getItem('myCat');  // 'Tom'
localStorage.removeItem('myCat')    //삭제됨
*/
function paintGreetings(username) {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello, ${username}`  ;    // "Hello "+username; 와 같음
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}