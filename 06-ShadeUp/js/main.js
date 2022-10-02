// const randomBtn = document.getElementById("randomPickerButton");
// const hexToRgbBtn = document.getElementById("hexTorgb");

// console.log(hexToRgbBtn);
// console.log(randomBtn);

// randomBtn.addEventListener("click", randompickerbtn);
// hexToRgbBtn.addEventListener("click", hexToRgb);

function randompickerbtn() {
  let list = "0123456789ABCDEF";
  let colorCode = "#";

  for (let i = 0; i < 6; i++) {
    colorCode += list[Math.floor(Math.random() * 16)];
  }

  document.getElementById("randomValuePara").innerText = colorCode;
  document.getElementById("randomPicker").style.backgroundColor = colorCode;
}

function rgbConvbtn() {
  const m1 = new Map([
    ["0", "0"],
    ["1", "1"],
    ["2", "2"],
    ["3", "3"],
    ["4", "4"],
    ["5", "5"],
    ["6", "6"],
    ["7", "7"],
    ["8", "8"],
    ["9", "9"],
    ["10", "A"],
    ["11", "B"],
    ["12", "C"],
    ["13", "D"],
    ["14", "E"],
    ["15", "f"],
  ]);

  const r = Number(document.getElementById("RCInput").value);
  const g = Number(document.getElementById("GCInput").value);
  const b = Number(document.getElementById("BCInput").value);

  if (r == "" || g == "" || b == "") {
  } else {
    let rq = Math.floor(r / 16).toString();
    let rrem = (r % 16).toString();
    let gq = Math.floor(g / 16).toString();
    let grem = (g % 16).toString();
    let bq = Math.floor(b / 16).toString();
    let brem = (b % 16).toString();

    let rstr = `${m1.get(rq)}${m1.get(rrem)}`;

    let gstr = `${m1.get(gq)}${m1.get(grem)}`;

    let bstr = `${m1.get(bq)}${m1.get(brem)}`;

    let str = "#" + rstr + gstr + bstr;
    document.getElementById("rgbCOut").innerText = str;
  }
}

function hexToRgb() {
  const m = new Map();

  m.set("1", "1");
  m.set("2", "2");
  m.set("3", "3");
  m.set("4", "4");
  m.set("5", "5");
  m.set("6", "6");
  m.set("7", "7");
  m.set("8", "8");
  m.set("9", "9");
  m.set("A", "10");
  m.set("B", "11");
  m.set("C", "12");
  m.set("D", "13");
  m.set("E", "14");
  m.set("F", "15");
  m.set("a", "10");
  m.set("b", "11");
  m.set("c", "12");
  m.set("d", "13");
  m.set("e", "14");
  m.set("f", "15");

  let r, g, b;

  const hexVal = document.getElementById("hexCInp").value;

  if (hexVal == "") {
  } else {
    r = hexVal.slice(0, 2);
    g = hexVal.slice(2, 4);
    b = hexVal.slice(4);

    r = Number(m.get(r[0])) * 16 + Number(m.get(r[1]));
    g = Number(m.get(g[0])) * 16 + Number(m.get(g[1]));
    b = Number(m.get(b[0])) * 16 + Number(m.get(b[1]));

    let rgb = `rgb(${r}, ${g}, ${b})`;

    document.getElementById("hexCOut").innerText = rgb;
  }
}

// hex to rgb converter

String.prototype.convertToRGB = function () {};

function hexFindbtn() {
  const input = document.getElementById("hexInput").value;
  document.getElementById("color-box").style.backgroundColor = input;
}

function RangeSelector() {
  const rinput = document.getElementById("RrInput").value;
  const ginput = document.getElementById("GrInput").value;
  const binput = document.getElementById("BrInput").value;

  let rgb = `rgb(${rinput},${ginput},${binput})`;
  document.getElementById("range-color-box").style.backgroundColor = rgb;
}

function RGBFindbtn() {
  const rinput = document.getElementById("RInput").value;
  const ginput = document.getElementById("GInput").value;
  const binput = document.getElementById("BInput").value;
  let rgb = `rgb(${rinput},${ginput},${binput})`;
  document.getElementById("rgb-color-box").style.backgroundColor = rgb;
}
