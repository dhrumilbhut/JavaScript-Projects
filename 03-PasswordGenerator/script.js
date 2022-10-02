const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

clipboardEl.addEventListener("click", () => {
  // const textarea = document.createElement("textarea");
  // const password = resultEl.innerText;
  // textarea.value = password;
  // document.body.appendChild(textarea);
  // textarea.select();
  // document.execCommand("copy");
  // textarea.remove();
  // alert("Password copied to clipboard");
  const result = document.getElementById("result");
  console.log(result.innerText);
  // result.select();

  navigator.clipboard.writeText(result.innerText);

  alert("Copied to Clipboard !!" + result.innerText);
});

generateEl.addEventListener("click", () => {
  const length = Number(lengthEl.value);
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

  resultEl.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  );
});

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = "";

  const typeCount = lower + upper + number + symbol; //Number of functions included

  // Functions included
  const typeArray = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );

  if (typeCount == 0) {
    return "";
  }

  for (let i = 0; i < length; i += typeCount) {
    typeArray.forEach((type) => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();
    });
  }
  const finalPassword = generatedPassword.slice(0, length);
  return finalPassword;
}

function getRandomLower() {
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  return lowercase[Math.floor(Math.random() * lowercase.length)];
}

function getRandomUpper() {
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return uppercase[Math.floor(Math.random() * uppercase.length)];
}

function getRandomNumber() {
  const numbers = "1234567890";
  return numbers[Math.floor(Math.random() * numbers.length)];
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*()_+=/";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
