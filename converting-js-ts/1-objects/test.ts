import {
    introducePerson,
    Status,
    isFulltimeEmployee,
    personToString,
    getProfessions,
  } from "./objects";
  
  const jack = {
    name: {
      first: "Jack",
      last: "Herrington",
    },
    status: Status.FullTime,
    profession: "Engineer",
  };
  const sam = {
    name: {
      first: "Sam",
      last: "Willington",
    },
    status: Status.Temporary,
    profession: "Data Analyst"
  };
  
  console.log(introducePerson());
  console.log(introducePerson(jack));
  console.log(introducePerson(sam));
  
  console.log(isFulltimeEmployee(jack));
  
  console.log(personToString(jack));
  
  console.log(
    getProfessions({
      1: jack,
      2: sam
    })
  );