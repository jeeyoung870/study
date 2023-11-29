// export const FullTime = "FullTime";
// export const Temporary = "Temporary";

export enum Status {
  FullTime,
  Temporary
}

// export const introducePerson = (person: {
//   name: {
//     first: string,
//     middle?: string,
//     last: string,
//   },
//   status: Status,
//   profession: string,
// }) =>
//   `Hello ${person.name.first} ${person.name.middle} ${person.name.last}`;

type Person = {
  name: {
    first: string,
    middle?: string,    // ? = 있어도없어도됨
    last: string,
  },
  status: Status,
  profession: string,
};

// export const introducePerson = (person: Person) =>
//   `Hello ${person.name.first} ${person.name.middle} ${person.name.last}`;
/*
연산자에 대한 설명 

옵셔널 체이닝 연산자(?.)는 객체의 중첩 속성에 접근할 때, 
해당 속성이 없는 경우 undefined를 반환하는 연산자입니다.

let user = {}; // 정보가 없는 사용자
// undefined, 페이지에 존재하지 않는 요소에 접근해 요소의 정보를 가져오려 하면 에러 발생
console.log( user && user.name && user.name.lastname );
// undefined, 에러가 발생하지 않습니다.
console.log( user?.name?.lastname );
*/

/*
  물음표 두 개 연산자(Nullish coalescing operator)는 좌항의 값이 null 또는 undefined인 경우에만 
  우항의 값을 반환하고, 그 외의 경우에는 좌항의 값을 반환합니다. 
  이러한 동작 때문에 옵셔널 체이닝 연산자(?.)와 함께 사용되기도 합니다.
  이와 같이 변수의 값이 null 또는 undefined인 경우에 기본값을 설정할 때 유용하게 사용됩니다.
  const a = null;
  const b = undefined;
  const c = 0;
  const d = '';
  const e = false;
  console.log(a ?? 'default'); // 'default'
  console.log(b ?? 'default'); // 'default'
  console.log(c ?? 'default'); // 0
  console.log(d ?? 'default'); // ''
  console.log(e ?? 'default'); // false
*/
export const introducePerson = (person?: Person) =>
`Hello ${person?.name?.first ?? "First"} ${person?.name?.middle ?? ""} 
${person?.name?.last ?? "Last"}`;

//if(person && person.name && person.name.first) => person?.name?.first 와 동일함

export const isFulltimeEmployee = (person: Person) => 
  person.status === Status.FullTime;

export const personToString = (
  person: Person = {
    status: Status.FullTime,
    name: {
      first: "unknown",
      last: "unknown",
    },
    profession: "unknown",
  }
) => JSON.stringify(person, null, 2);

// export const getProfessions = (personMap: {[key:number]: Person}) =>
//   Object.values(personMap)
//     .map(({ profession }) => profession)
//     .join("\n");

type PersonMap = {[key:number]: Person};

export const getProfessions = (personMap: PersonMap) =>
Object.values(personMap)
  .map(({ profession }) => profession)
  .join(",\n");    