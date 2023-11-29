import {
  isACat,
  addNumbers,
  introduction,
  introducePerson,
  dumpObject,
  dumpStringOrNumber,
  isASubscriber,
  Person,
  getPersonName
} from "./basic-types";

console.log(isACat("cat"));
console.log(isACat("dog"));

console.log(introduction("Jack"));

console.log(addNumbers(1, 2));
// console.log(addNumbers(1, "Jack"));

introducePerson("Molly");

console.log(dumpObject("object", {}));

console.log(dumpStringOrNumber("foo"));
console.log(dumpStringOrNumber(10));

// const william = {
//   name: "william",
//   subscriber: true
// }

// console.log(isASubscriber(william));

// const william: Person = {
//   name: "william",
//   subscriber: true,
//   coolnessAmount: 10
// }

//console.log(isASubscriber(william));

const william: Person = {
  name: {
    first: "william",
    middle: "J",
    last: "smith"
  },
  subscriber: true,
  coolnessAmount: 10
}

console.log(getPersonName());
console.log(getPersonName(william));

const dave: Person = {
  name: {
    first: "Jane",
    last: "doe"
  },
  subscriber: true,
  coolnessAmount: 20
}

console.log(getPersonName(dave));

