let stringArr = ['one', 'hey', 'Dave']

let guitars = ['Strat', 'Les Paul', 5150]

let mixedData = ['EVH', 1984, true]

stringArr[0] = 'John'
stringArr.push('hey')

guitars[0] = 1984
console.log(guitars)
//unshift() 배열의 맨 앞에 값을 추가한다.
guitars.unshift('Jim') //
console.log(guitars)


let test = []
let bands: string[] = []
bands.push('Van Halen')
console.log(bands)

// Tuple 
let myTuple: [string, number, boolean] = ['Dave', 42, true]
let mixed = ['John', 1, false]


// Objects
let myObj: object
myObj = []

console.log(typeof myObj)
myObj = bands
myObj = {}

const exampleObj = {
    prop1: 'typescript',
    prop2: true,
}

exampleObj.prop1 = 'John'

type Guitarist = {
    name: string,  //optional
    active: boolean,
    albums: (string | number)[]
}

let evh: Guitarist = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OU812']
}

let jp: Guitarist = {
    name: 'Jimmy',
    active: true,
    albums: ['I', 'II', 'IV']
}

const greetGuitarist = (guitarist: Guitarist) => {
    return `Hello ${guitarist.name.toUpperCase()}!`

}
console.log(greetGuitarist(jp))


// Enums 
// "Unlike most TypeScript features, 
// Enums are not a type-level addition to JavaScript but something added to the language and runtime."

enum Grade {
    U,
    D,
    C,
    B,
    A,
}

console.log(Grade.U)