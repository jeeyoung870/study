// class 선언
class Coder {
    secondLang!: string

    constructor(
        public readonly name: string,
        public music: string,
        private age: number,
        protected lang: string = 'Typescript'
    ) {
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang
    }

    public getAge() {
        return `Hello, I'm ${this.age}`
    }
}

const Dave = new Coder('Dave', 'Rock', 42)
console.log(Dave.getAge())
// console.log(Dave.age)   //Property 'age' is private and only accessible within class 
// console.log(Dave.lang)  //Property 'lang' is protected and only accessible within class

class WebDev extends Coder {
    constructor(
        public computer: string,
        name: string,
        music: string,
        age: number,
    ) {
        super(name, music, age)
        this.computer = computer
    }

    public getLang() {
        return `I write ${this.lang}`
    }
}

const Sara = new WebDev('Mac', 'Sara', 'Lofi', 25)
console.log(Sara.getLang())
// console.log(Sara.age)  //Property 'age' is private and only accessible within class
// console.log(Sara.lang) //Property 'lang' is protected and only accessible within class
/////////////////////////////////////

interface Musician {
    name: string,
    instrument: string,
    play(action: string): string
}

class Guitarist implements Musician {
    name: string
    instrument: string

    constructor(name: string, instrument: string) {
        this.name = name
        this.instrument = instrument
    }

    play(action: string) {
        return `${this.name} ${action} the ${this.instrument}`
    }
}

const Page = new Guitarist('Jimmy', 'guitar')
console.log(Page.play('strums'))
//////////////////////////////////////

class People {
    static count: number = 0

    static getCount(): number {
        return People.count
    }

    public id: number

    constructor(public name: string) {
        this.name = name
        this.id = ++People.count
    }
}

const John = new People('John')
const Steve = new People('Steve')
const Amy = new People('Amy')

console.log(Amy.id)
console.log(Steve.id)
console.log(John.id)
console.log(People.count)
//////////////////////////////////

class Bands {
    private dataState: string[]

    constructor() {
        this.dataState = []
    }
    // getter
    public get data(): string[] {
        return this.dataState
    }
    // setter
    public set data(value: string[]) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value
            //return
        } else throw new Error('Param is not an array of strings')
    }
}

const MyBands = new Bands()
MyBands.data = ['Neil Young', 'Led Zep']    // setter method
console.log(MyBands.data)
MyBands.data = [...MyBands.data, 'ZZ Top']  // setter method
console.log(MyBands.data)   // getter method
// MyBands.data = ['Van Halen', 5150] // Type 'number' is not assignable to type 'string'.