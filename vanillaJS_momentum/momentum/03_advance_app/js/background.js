const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
];

const idx = Math.floor(Math.random() * images.length); 
const randomImgName = images[idx];

// js에서 img 태그 생성하고, body에 추가하기
const bgImage = document.createElement("img");
bgImage.src = `img/${randomImgName}`;
// console.log(bgImage);

document.body.appendChild(bgImage);     //append : 맨뒤에추가 / prepend : 맨앞에추가