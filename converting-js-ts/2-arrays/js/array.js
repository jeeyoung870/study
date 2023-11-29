const filterPeople = (people, filterFunc) => people.filter(filterFunc);

export const findByName = (people, name) =>
  filterPeople(people, (person) => person.name === name);
export const findByProfession = (people, profession) =>
  filterPeople(people, (person) => person.profession === profession);
export const findByPet = (people, pet) =>
  filterPeople(people, (person) => person.pets.includes(pet));

export const getFirstPet = (person) =>
  person.pets.length === 0 ? "none" : person.pets[0];
