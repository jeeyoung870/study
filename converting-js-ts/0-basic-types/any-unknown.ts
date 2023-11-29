function sum(a: number, b: number): number {
    return a + b;
}
const a: any = 'a';
const b: any = 'b';

// this works as a and b are any
const result = sum(a, b);
console.log(result); //ab


// function sum2(a: number, b: number): number {
//     return a + b;
// }
// const a2: unknown = 'a';
// const b2: unknown = 'b';

// // error TS2345: Argument of type 'unknown' is not assignable to parameter of type 'number'.
// const result2 = sum(a2, b2);
// console.log(result2); 


//any vs unknown
const obj: any = {};
console.log(obj.id);

const obj2: unknown = {};
//'obj2' is of type 'unknown'.
//console.log(obj2.id); 

type ThingWithID = {
    id: number;
}

function printThingWithId(thing: unknown) {
    //console.log(thing.id);
    console.log((thing as ThingWithID).id);
}

printThingWithId({
    id: 100
});





 





