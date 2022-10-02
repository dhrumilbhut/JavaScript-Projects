function update() {
  const text = document.getElementById("input").value;
  var count = 0;

  var split = text.split(" ");

  for (let i = 0; i < split.length; i++) {
    if (split[i] != "") {
      count++;
    }
  }
  document.getElementById("output").innerText = count;
}
