function calculate() {
  const amount = document.getElementById("amount").value;
  const rate = document.getElementById("rate").value;
  const months = document.getElementById("months").value;

  if (amount < 0 || rate < 0 || months < 0) {
    alert("Negative Values Not Allowed");
  } else {
    if (amount == "" || rate == "" || months == "") {
      alert("Enter all values");
    } else {
      // Interest per month
      let interest = (amount * (rate * 0.01)) / months;

      // Total amount to be paid in a month including interest
      let total = (amount / months + interest).toFixed(2);
      document.getElementById("total").innerHTML = total;
    }
  }
}
