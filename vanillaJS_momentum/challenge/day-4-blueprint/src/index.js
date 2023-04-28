console.dir(window);

// window 객체 프로퍼티
// window.innerHeight : 브라우저 세로길이   / window.innerWidth : 브라우저 가로길이
// maxwith = 1920
function cngColor(color) {
    const currentColor = document.body.className;
    document.body.classList.remove(currentColor);
    document.body.classList.add(color);
}

function resizeHandler() {
    const wid = window.innerWidth;
    if(wid >= 0 && wid < 500) {
        cngColor("two");
    } else if(wid >= 500 && wid < 1000) {
        cngColor("three");
    } else if(wid >= 1000 && wid < 1500) {
        cngColor("four");
    } else {
        cngColor("five");
    }
}

document.body.classList.add("one");
window.addEventListener("resize", resizeHandler);