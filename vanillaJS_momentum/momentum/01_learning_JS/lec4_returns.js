// returns

const age = 55;
function calculateKORAge(ageOfForeigner) {
    return ageOfForeigner +2;
}
const krAge = calculateKORAge(age);
console.log(krAge);

const calculator = {
    add : function(a,b) {return a+b;},
    minus : function(a,b) {return a-b;},
    divide : function(a,b) {return a/b;},
    multiple : function(a,b) {return a*b;},
    power : function(a,b) {return a**b;}
};

const addResult = calculator.add(33,4);
console.log(addResult);