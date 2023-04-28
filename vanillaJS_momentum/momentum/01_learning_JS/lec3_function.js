// function

function sayHello(myName, age) {
    console.log("Hello, i'm ", myName, "and i'm ", age);
} 

sayHello("jyjy", 12);
sayHello(null,);
sayHello(123, 5);

function plus(a, b) {
    console.log(a+b);
}
plus(); // NaN
plus(60);   // NaN
plus(8, 60);

// 함수는 object 안의 파라미터가 될수있음
const player =  {
    name : "jyjy",
    sayHi : function(friendName) {
        console.log("Hi, "+ friendName+" nice to meet you.");
    }
};
player.sayHi("jyjy");


const calculator = {
    add : function(a,b) {console.log(a+b);},
    minus : function(a,b) {console.log(a-b);},
    divide : function(a,b) {console.log(a/b);},
    multiple : function(a,b) {console.log(a*b);},
    power : function(a,b) {console.log(a**b);}
};