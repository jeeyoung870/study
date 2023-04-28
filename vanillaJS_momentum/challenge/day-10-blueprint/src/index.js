const clockTitle = document.querySelector(".js-clock");

const xMonth = 12;
const xDay = 25;

// 크리스마스까지 얼마나 남았는지 보여주는 시계
function showClock() {
    const today = new Date();
    const thisYear = today.getFullYear();
    const xDate = new Date(thisYear, xMonth, xDay);

    // let leftTime = xDate.getTime()-today.getTime();
    let leftTime = xDate-today;     // 단위=밀리초
    
    const leftDay = Math.floor( leftTime / (24*60*60*1000) );
    leftTime %= leftDay*(24*60*60*1000);
    const leftHour = Math.floor( leftTime / (60*60*1000) );
    leftTime %= leftHour*(60*60*1000);
    const leftMinute = Math.floor( leftTime / (60*1000) );
    leftTime %= leftMinute*(60*1000);
    const leftSecond = Math.floor( leftTime / (1000) );
    leftTime %= leftSecond*(60*1000);

    clockTitle.innerText = `${String(leftDay).padStart(3,'0')}d ${String(leftHour).padStart(2,'0')}h ${String(leftMinute).padStart(2,'0')}m ${String(leftSecond).padStart(2,'0')}s`;
}

showClock();
setInterval(showClock, 1000);