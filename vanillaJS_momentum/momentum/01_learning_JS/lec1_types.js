
// const : 상수, 업데이트X / let : 업데이트O
// var 는 가능하면 지양한다.
const a = 5;
const b = 2;
let myName = "jeeyoung";

console.log(a+b);
console.log(a*b);
console.log(a/b);
console.log("Hello "+myName);

myName = "870";
console.log(myName);

// null / undefined 에러안남
const amIFat = null;
let soemthing;
console.log(amIFat, soemthing);    
console.log(amIFat+ soemthing);    // NaN

// array
const daysOfWeek = ["mon", "tue", "wed", "thur", "fri", "sat"];
const nonsense = [1, 2, "hello", false, null, true, undefined, "870"];

console.log(daysOfWeek[4]);
daysOfWeek.push("sun");
console.log(daysOfWeek[daysOfWeek.length-1]);