// 방법1
// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginBtn = loginForm.querySelector("button");
// 방법2
const loginInput = document.querySelector("#login-form input");
const loginBtn =  document.querySelector("#login-form button");

function clickBtn(){
    const userName = loginInput.value;
    // if(userName === ""){     // form의 required 역할
    //     alert("Please write your name.");
    // } else if(userName.length > 15) {    // form의 maxlength 역할
    //     alert("Your name is too long.");
    // }
    // input의 유효성검사 키워드를 사용하기 위해서는 input이 form태그 안에 위치해야 한다.
    // form 안의 버튼을 누르거나 enter키 누를시 자동으로 submit된다.
    // 그리고 페이지는 새로고침된다.
    alert(userName);
}
loginBtn.addEventListener("click", clickBtn);