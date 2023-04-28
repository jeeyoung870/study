// object & properties


const player =  {
    name : "jyjy",
    point : 12222,
    handsome : true,
    fat : "little bit"
};
// object의 property 호출하는 방법
console.log(player.name);
console.log(player["point"]);
// property 변경
console.log(player.fat);
player.fat = false;
console.log(player.fat);

// const object를 다른 object로 변경할 수는 없지만, const object 안의 property를 변경, 추가는 가능하다.
player.lastName = "pp";
console.log(player["lastName"]);

player.point += 15;
console.log(player.point);