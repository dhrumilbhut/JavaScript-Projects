function binToDec(event) {
  event.preventDefault();
  var str = document.getElementById("binary").value;
  var output = parseInt(str, 2);
  document.querySelector(".result").innerHTML = `Decimal Number : ${output}`;
}

// const btn = document.querySelector(".btn");
// btn.addEventListener("click", () => {
//   event.preventDefault();
//   var str = document.getElementById("binary").value;
//   var output = parseInt(str, 2);
//   document.querySelector(".result").innerHTML = output;
// });
