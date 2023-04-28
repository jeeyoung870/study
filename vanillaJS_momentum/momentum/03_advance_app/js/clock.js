const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");   // date.getHours() 은 number이다.
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock();     // interval은 1초후에 실행되기 때문에 즉시 보여주기 위해 getClock();을 넣어줌.
setInterval(getClock, 1000);

// 여러번실행
// setInterval 사용 : setInterval(실행할함수, 간격시간(단위ms));

// 한번실행
// setTimeout(실행할함수, 대기할시간(단위ms)); 일정시간 뒤에 함수 실행함.
// setTimeout(sayHello, 5000);

// padStart(글자길이, "글자길이모자랄때앞에넣을문자");      string에 적용가능 함수. 시계문자 formatting용도로 사용
// padEnd() : 채울문자를 뒤에 넣음