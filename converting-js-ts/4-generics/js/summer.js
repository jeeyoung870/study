const summer = (items) => items.reduce((a, i) => a + i.count, 0);

const houses = [
  {
    count: 100,
    name: "House 1",
  },
  {
    count: 200,
    name: "House 2",
  },
];
console.log(summer(houses));
