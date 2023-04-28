
const numForm = document.querySelector("form#numberForm");
const maxNumber = document.querySelector("#maxNum");
const guessNumber = document.querySelector("#guess");
const gameResult = document.querySelector("div");

function submitHandler(event) {
    event.preventDefault();
    const maxNum = maxNumber.valueAsNumber;
    const guessNum = guessNumber.valueAsNumber;
    const machineNum = Math.floor(Math.random() * (maxNum + 1)); 
    let winOrLost = "Lost";
    if(guessNum === machineNum) {
        winOrLost = "Won";
    }

    gameResult.classList.remove("hidden");
    gameResult.querySelector("span:first-child").innerText = `You choose : ${guessNum} / Machine choose : ${machineNum}`;
    gameResult.querySelector("span:last-child").innerText = `You ${winOrLost}!`;

}

numForm.addEventListener("submit", submitHandler);