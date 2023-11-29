const {
  findByName,
  findByPet,
  findByProfession,
  getFirstPet,
} = require("./array");

const people = [
  {
    name: "Jack",
    profession: "Engineer",
    pets: ["Dog"],
  },
];

console.log(findByName(people, "Jack"));
console.log(findByProfession(people, "Engineer"));
console.log(findByPet(people, "Dog"));
console.log(getFirstPet(people[0]));
console.log(
  getFirstPet({
    name: "Angela",
    profession: "Doctor",
    pets: [],
  })
);
