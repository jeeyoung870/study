// Index Signatures  동적 key값 할당가능(string, number만 가능)

// interface TransactionObj {
//     readonly [index: string]: number
// }

interface TransactionObj {
    readonly [index: string]: number,
    Pizza: number,
    Books: number,
    Job: number
}

const todaysTransactions: TransactionObj = {
    Pizza: -10,
    Books: -5,
    Job: 50,
}

console.log('Pizza value')
console.log(todaysTransactions.Pizza)
console.log(todaysTransactions['Pizza'])

let prop: string = 'Pizza'
//Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'TransactionObj'.
// interface TransactionObj에 [index: string]: number 가 선언되어야 String타입 변수를 사용한 호출가능함!!
console.log(todaysTransactions[prop]) ;

const todaysNet = (transactions: TransactionObj): number => {
    let total = 0
    for (const transaction in transactions) {
        console.log('----> ' + transaction)
        total += transactions[transaction]
    }
    return total
}
console.log(todaysNet(todaysTransactions))

todaysTransactions.Pizza = 40
//console.log(todaysTransactions['Dave']) // undefined

///////////////////////////////////

interface Student {
    [key: string]: string | number | number[] | undefined,  //key 변수로 호출하기 위한 정의
    name: string,
    GPA: number,
    classes?: number[]
}

const student: Student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200]
}

//console.log(student.test)

console.log('student => key : value')
for (const key in student) {
    console.log(`${key}:${student[key]}`)        //  [key: string]: string | number | number[] | undefined 정의해야 사용가능!
    // console.log(`${key}: ${student[key as keyof Student]}`)
}
console.log('student => value')
Object.keys(student).map(key => {
    console.log(student[key as keyof typeof student])
})

const logStudentKey = (student: Student, key: keyof Student): void => {
    console.log(`Student ${key}: ${student[key]}`)
}
logStudentKey(student, 'name')

/////////////////////////////////

// interface Incomes {
//     [key: string]: number
// }

type Streams = 'salary' | 'bonus' | 'sidehustle';
// type Record<K extends string | number | symbol, T> = { [P in K]: T; }
type Incomes = Record<Streams, number>      // Record<key타입, value타입> 

const monthlyIncomes: Incomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
}

for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue as keyof Incomes])
}