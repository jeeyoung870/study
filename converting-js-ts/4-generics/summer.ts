interface ISumable {
  count: number;
}
export const summer = <T extends ISumable>(items: T[]): number =>
  items.reduce((a, i) => a + i.count, 0);

type House = {
  count: number;
  name: string;
};

const houses: House[] = [
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
