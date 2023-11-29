// Type Aliases 
type stringOrNumber = string | number

type stringOrNumberArray = (string | number)[]

type Guitarist = {
    name?: string,
    active: boolean,
    albums: stringOrNumberArray
}

type UserId = stringOrNumber

// Literal types =타입으로써 값을 지정하면 assign 불가능
let myName: 'Dave'
// myName = 'John';    // Error: not assignable to type '"Dave"'

//Union Literal types
let userName: 'Dave' | 'John' | 'Amy'
userName = 'Amy'

// functions 
const add = (a: number, b: number): number => {
    return a + b
}

const logMsg = (message: any): void => {
    console.log(message)
}

logMsg('Hello!')
logMsg(add(2, 3))

let subtract = function (c: number, d: number): number {
    return c - d
}

// function types 함수자체의 타입지정
type mathFunction = (a: number, b: number) => number
// interface mathFunction {
//     (a: number, b: number): number
// }
// function type 사용
let multiply: mathFunction = function (c, d) {
    return c * d
}

logMsg(multiply(2, 2))

// optional parameters  선택 인자 처리
const addAll = (a: number, b: number, c?: number): number => {
    if(typeof c !== 'undefined') {
        return a + b + c;
    }
    return a+b;
}
console.log('optional parameters')
logMsg(addAll(2, 3, 2))
logMsg(addAll(2, 3))

// default param value
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
    console.log('=> input a b c : ' + a,b,c)
    return a + b + c
}

console.log('default param value')
logMsg(sumAll(5, 3))
console.log('sumAll undefined')
logMsg(sumAll(undefined, 3))

// Rest Parameters (spread)
const total = (a: number, ...nums: number[]): number => {
    return a + nums.reduce((prev, curr) => prev + curr)
}
console.log('total')
logMsg(total(10, 2, 3))

// custom type guard 
const isNumber = (value: any): boolean => {
    return typeof value === 'number'
        ? true : false
}

// never type
// const createError = (errMsg: string): void => {
const createError = (errMsg: string): never => {
    throw new Error(errMsg)
}
// use of the never type 
const numberOrString = (value: number | string): string => {
    if (typeof value === 'string') return 'string'
    if (isNumber(value)) return 'number'
    return createError(`This should never happen! Type : ${typeof value}`)
}
console.log(numberOrString(100))
console.log(numberOrString('typescript'))
let tmp: any = {id:"123"}
console.log(numberOrString(tmp));



