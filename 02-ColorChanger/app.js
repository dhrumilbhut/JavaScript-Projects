const canvas = document.getElementById("canvas");
const button = document.getElementById("button");

function getRandomColor() {
  let list = "0123456789ABCDEF";
  let colorCode = "#";

  for (let i = 0; i < 6; i++) {
    colorCode += list[Math.floor(Math.random() * 16)];
  }

  return colorCode;
}

button.addEventListener("click", () => {
  canvas.style.backgroundColor = getRandomColor();
});
