// 00:00:00 포맷의 시계 보여주기.
const clock = document.getElementById("clock");

function showClock() {
    const today = new Date();
    const hours = String(today.getHours()).padStart(2,'0');
    const minutes = String(today.getMinutes()).padStart(2,'0');
    const seconds = String(today.getSeconds()).padStart(2,'0');
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

showClock();
setInterval(showClock, 1000);