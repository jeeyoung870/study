export const isACat = (animal: string): boolean => animal === "cat";

export function addNumbers(a: number, b: number): number {
  return a + b;
}

export const introduction = (name: string): string => `Hello ${name}`;

export const introducePerson = (name: string): void =>
  console.log(introduction(name));

export const dumpObject = (type: string, obj: unknown): string =>
  `${type}:${JSON.stringify(obj)}`;

export const dumpStringOrNumber = (info: string | number) => `value ${info}`;

// export const isASubscriber = (person: {
//   name: string;
//   subscriber: boolean;
// }) => person.subscriber;

// type Person = {
//   name: string;
//   subscriber: boolean;
// };

// export type Person = {
//   name: string;
//   subscriber: boolean;
//   coolnessAmount: number;
// };

// export interface Person {
//   name: string;
//   subscriber: boolean;
//   coolnessAmount: number;
// };

export const isASubscriber = (person: Person) => person.subscriber;

export interface Person {
  name: {
    first: string;
    middle?: string;
    last: string;
  },  
  subscriber: boolean;
  coolnessAmount: number;
};

export const getPersonName = (person?: Person) => 
`${person?.name?.first ?? "First"} ${person?.name?.middle ?? ""} ${person?.name?.last ?? "Last"}`

//if(person && person.name && person.name.first) => person?.name?.first 와 동일함

export interface IDatabase {
  getById(id: number): string
}

class FileData implements IDatabase {
  getById(id: number): string {
      return "hello";
  }
}




