"use strict";
function getNumber(value) {
    return value;
}
function getArray(value) {
    return value;
}
// Generic type - function
function getValue(value) {
    return value;
}
getValue('hi').toLocaleUpperCase();
getValue(100).toLocaleString();
const tony = { name: 'tony', age: 100 };
class StateObject {
    constructor(value) {
        console.log('constructor value ' + value);
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store = new StateObject("John");
console.log(store.state);
store.state = "Dave";
//store.state = 12
const myState = new StateObject([15]);
myState.state = ['Dave', 42, true];
console.log(myState.state);
myState.state = ['js', 'ts', 'aa', 'es'];
console.log(myState.state);
