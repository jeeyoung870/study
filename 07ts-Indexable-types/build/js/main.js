"use strict";
// Index Signatures 
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
};
console.log('Pizza value');
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);
let prop = 'Pizza';
console.log(todaysTransactions[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        console.log('----> ' + transaction);
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
todaysTransactions.Pizza = 40;
const student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200]
};
//console.log(student.test)
let stuKey;
stuKey = 'name'; //ok
stuKey = 'grade'; //Type '"grade"' is not assignable to type 'keyof Student'
console.log('sudent => key : value');
for (const key in student) {
    //console.log(`${key}:${student[key]}`)
    console.log(`${key}: ${student[key]}`);
}
console.log('student => value');
Object.keys(student).map(key => {
    console.log(student[key]);
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'name');
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
