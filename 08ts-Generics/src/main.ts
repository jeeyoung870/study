function toArray<T>(a: T, b: T): T[] {
    return [a, b];
}
console.log(toArray<number>(1, 2));
console.log( toArray<string>('1', '2'));
console.log( toArray<string | number>(1, '2'));



function getNumber(value: number) {
    return value;
}

function getArray(value: string[]) {
    return value;
}

// Generic type - function
function getValue<T>(value: T): T {
    return value;
}
console.log(getValue('hi').toLocaleUpperCase());
console.log(getValue(10000).toLocaleString());

// Generic type - interface
interface Developer<T> {
    name: string;
    age: T;
}
const tony: Developer<number> = { name: 'tony', age: 100 };

class StateObject<T> {
    private data: T

    constructor(value: T) {
        console.log('constructor value ' + value)
        this.data = value
    }

    get state(): T {
        return this.data
    }

    set state(value: T) {
        this.data = value
    }
}



