const {
  isACat,
  addNumbers,
  introduction,
  introducePerson,
  dumpObject,
  dumpStringOrNumber,
} = require("./basic-types");

console.log(isACat("cat"));
console.log(isACat("dog"));

console.log(introduction("Jack"));

console.log(addNumbers(1, 2));
console.log(addNumbers(1, "Jack"));

introducePerson("Molly");

console.log(dumpObject("object", {}));

console.log(dumpStringOrNumber("foo"));
console.log(dumpStringOrNumber(10));
