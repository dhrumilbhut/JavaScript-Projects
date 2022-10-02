function display(val) {
  document.getElementById("inp").value += val;
}

function solve() {
  let x = document.getElementById("inp").value;
  let y = eval(x);
  document.getElementById("inp").value = y;
}

function clr() {
  document.getElementById("inp").value = "";
}

function back() {
  let value = document.getElementById("inp").value;
  document.getElementById("inp").value = value.substr(0, value.length - 1);
}
