import { findByName, findByPet, findByProfession, getFirstPet, Person } from "./array";

const people: Person[] = [
  {
    name: "Jack",
    profession: "Engineer",
    pets: [""],
  },
];

console.log(findByName(people, "Jack"));
console.log(findByProfession(people, "Engineer"));
console.log('1-------');
console.log(findByPet(people, "Dog"));
console.log('2-------');
console.log(getFirstPet(people[0]));
console.log('3-------');
console.log(
  getFirstPet({
    name: "Angela",
    profession: "Doctor",
    pets: [],
  })
);
