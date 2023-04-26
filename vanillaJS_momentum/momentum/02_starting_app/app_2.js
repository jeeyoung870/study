
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

// event function이 실행될때, ()안의 첫번째 인자 = 방금 탐지된 event객체 (ex) SubmitEvent)
// 무조건 첫번째인자로 돌아옴. tomato
function onLoginSubmit(tomato){
    tomato.preventDefault();    // 새로고침 방지
    console.log(tomato);

    const userName = loginInput.value;
    console.log(userName);
}

loginForm.addEventListener("submit", onLoginSubmit);