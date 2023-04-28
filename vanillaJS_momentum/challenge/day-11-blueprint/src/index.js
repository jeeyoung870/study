const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34"
];

const chgBtn = document.querySelector("button#chgBgColor");
const bgStyle = document.body.style;


function changeBgColorHandler() {
  // 랜덤으로 두 컬러 고르기 (겹치면 안됨)
  const randomIdx = Math.floor(Math.random()*colors.length);
  const col1 = colors[randomIdx];
  const colors2 = colors.filter(color => {return color !== col1;});
  const randomIdx2 = Math.floor(Math.random()*colors2.length);
  const col2 = colors2[randomIdx2];
  bgStyle.background = `linear-gradient(45deg, ${col1}, ${col2})`;
}

chgBtn.addEventListener('click', changeBgColorHandler);