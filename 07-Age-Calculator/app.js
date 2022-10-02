function calcAge() {
  var userinput = document.getElementById("dob").value;
  var dob = new Date(userinput);

  var month_diff = Date.now() - dob.getTime();

  var age_dt = new Date(month_diff);

  var year = age_dt.getUTCFullYear();
  var months = age_dt.getUTCMonth();
  var days = age_dt.getUTCDate();

  document.getElementById("years").innerHTML = Math.abs(year - 1970);
  document.getElementById("months").innerHTML = months;
  document.getElementById("days").innerHTML = days;
}
