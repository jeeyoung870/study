// if ~ else


/*
const age = prompt("How old are you?"); // prompt("alert창메세지"); => js를 멈추고 사용자입력을 받음, 입력받은 값을 return함
console.log(typeof age);    // 변수의 타입 체크
// 타입 변경
console.log(parseInt(age));     // 문자 입력시 NaN 
console.log(typeof parseInt(age));  // 문자 입력해도 number로 출력됨
*/
// 함수 중첩
const parsedAge = parseInt(prompt("How old are you?"));
// console.log(isNaN(parsedAge));


if(isNaN(parsedAge) || parsedAge < 0) {
    alert("Please write a real positive number.");
}else if(parsedAge <= 18) {
    console.log("You are too young");
} else if(parsedAge > 18 && parsedAge < 60){
    console.log("You can drink");
} else if(parsedAge === 100) {
    console.log("Wow, you are wise.");
} else {
    console.log("No good to drink.");
} 