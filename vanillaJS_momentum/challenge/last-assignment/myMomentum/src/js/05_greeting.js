// 아침/점심/저녁 다른 인삿말+username 을 보여준다.
// setInterval로 30초마다 인삿말 교체하기
// localStorage에 username 있으면 greeting, 없으면 loginForm 보여주기
const morning = [
    "Good morning, ",
    "One step at a time, ",
    "Stay true, "
];
const afternoon = [
    "Good afternoon, ",
    "You become what you believe, ",
    "Life happens now, "
];
const night = [
    "Be kind to yourself, ",
    "Smile, breathe and go slowly, ",
    "It’s never too late, "
];

const greeting = document.getElementById("greeting");
const nameForm = document.getElementById("usernameForm");
const nameInput = nameForm.querySelector("input");

const GREETINGINDEX = "greetingIndex";
const USERNAME = "username";

function loginHandler(event) {
    event.preventDefault();
    localStorage.setItem(USERNAME, nameInput.value);
    localStorage.setItem(GREETINGINDEX, 0);
    paintGreeting();
}
function getGreetingMent(greetIdx) {
    const hour = (new Date()).getHours();
    let greet = "";
    if(hour>=6 && hour<12) {
        greet = morning[greetIdx];
    } else if(hour>=12 && hour<20) {
        greet = afternoon[greetIdx];
    } else {
        greet = night[greetIdx];
    }
    return greet;
}
function showGreeting(greetIdx, userName) {
    const greetingText = getGreetingMent(greetIdx);
    greeting.innerText = `${greetingText+userName}.`;
}
function paintGreeting() {
    const userName = localStorage.getItem(USERNAME);
    if(userName === null) {
        clock.classList.add("hidden2");
        greeting.classList.add("hidden1");
        mainFocusBox.classList.add("hidden2");
        todoBtn.classList.add("hidden2");
    
        nameForm.addEventListener("submit", loginHandler);
    } 
    else {
        nameForm.classList.add("hidden1");
        clock.classList.remove("hidden2");
        greeting.classList.remove("hidden1");
        mainFocusBox.classList.remove("hidden2");
        todoBtn.classList.remove("hidden2");
    
        let greetIdx = parseInt(localStorage.getItem(GREETINGINDEX));
        showGreeting(greetIdx, userName);
        setInterval(changeGreeting, 30000);
        function changeGreeting() {
            greetIdx = greetIdx+1 >= morning.length ? 0 : greetIdx+1;
            localStorage.removeItem(GREETINGINDEX);
            localStorage.setItem(GREETINGINDEX, greetIdx);
            showGreeting(greetIdx, userName);
        }
    }
}

paintGreeting();