let myName: string = "Typescript";
let meaningOfLife: number;
let isLoading: boolean;
let album: any; //남용 X! 부득이한 경우만 사용

myName = "John";

meaningOfLife = 42;
isLoading = true;
album = 5150;

//function
const sum = (a: number, b: number): number => a + b;

//union type 둘중하나 가능!!
let postId: string | number;
postId = "aa";
postId = 100;
let isActive: number | boolean;

// instersection type 두 타입 모두만족
interface Person {
  name: string;
  age: number;
}
interface Developer {
  name: string;
  skill: string;
}
type John = Person & Developer;
const John = {
    name: 'john',
    age: 52,
    skill: 'coding'
};
console.log(John);


// 정규식
const regex: RegExp = /such/gi; // i=insensitive(대소문자구별X), g=global

const testValue1: string = "You are Such a great!!";
const testValue2: string = "It was such a nice day";

console.log(regex.test(testValue1));
console.log(new RegExp(regex).test(testValue2)); // test 할때마다 new regex 객체를 생성해야 똑같이 사용가능...
