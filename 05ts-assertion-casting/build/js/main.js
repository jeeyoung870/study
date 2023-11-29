"use strict";
// Type assertions
// convert to more or less specific 
let a = 'hello';
let b = a; // less specific 
let c = a; // more specific 
let d = 'world';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
// Be careful! TS sees no problem - but a string is returned
let nextVal = addOrConcat(2, 2, 'concat');
console.log(typeof nextVal); // string 출력. assert한 타입이 아닌 실제 값타입을 본다.
console.log(nextVal);
function getEmployeeName(emp) {
    return emp.name; // 👈️ use non-null assertion    
}
// 👇️ "Bobby Hadz"
console.log(getEmployeeName({ id: 1, name: 'Bobby Hadz' }));
console.log(getEmployeeName());
