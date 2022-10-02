// https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=dhrumilbhut
const generateBtn = document.getElementById("submit");
const input = document.getElementById("input");
const img = document.getElementById("img");

generateBtn.addEventListener("click", generateQr);

function generateQr() {
  img.setAttribute(
    "src",
    `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${input.value}`
  );

  console.log(
    `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${input.value}`
  );
}
