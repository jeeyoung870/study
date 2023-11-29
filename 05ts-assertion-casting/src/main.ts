type One = string
type Two = string | number
type Three = 'hello'

// Type assertions
// convert to more or less specific 
let a: One = 'hello'
let b = a as Two // less specific 
let c = a as Three // more specific 

let d = <One>'world'
let e = <string | number>'world'

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
    if (c === 'add') return a + b
    return '' + a + b
}

let myVal: string = addOrConcat(2, 2, 'concat') as string

// Be careful! TS sees no problem - but a string is returned
let nextVal: number = addOrConcat(2, 2, 'concat') as number
console.log(typeof nextVal)   // string 출력. assert한 타입이 아닌 실제 값타입을 본다.
console.log(nextVal)   


//10 as string
//(10 as unknown) as string    // 반환될값이 unknown일경우 type assertion 해도 에러X...

// The DOM 
// ! Non-null assertion operator
// const img = document.querySelector('img')
// const myImg = document.getElementById('#img') as HTMLImageElement
// const nextImg = <HTMLImageElement>document.getElementById('#img')

// img.src
// myImg.src
// nextImg.src

type Employee = {
    id: number;
    name: string;
  };
  
  function getEmployeeName(emp?: Employee) {
    return emp!.name; // 👈️ use non-null assertion    
  }
  
  // 👇️ "Bobby Hadz"
  console.log(getEmployeeName({ id: 1, name: 'Bobby Hadz' }))
  console.log(getEmployeeName())
