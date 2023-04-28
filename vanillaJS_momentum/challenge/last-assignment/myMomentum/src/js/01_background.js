// 배경사진 랜덤지정
const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg"
];

const randomIdx = Math.floor(Math.random() * images.length);
document.body.style.backgroundImage = `url("src/img/${images[randomIdx]}")`;
