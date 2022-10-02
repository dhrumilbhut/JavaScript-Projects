const jokeDiv = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", fetchJoke);

function fetchJoke() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((res) => res.json())
    .then((data) => (jokeDiv.innerText = data.value));
}

fetchJoke();
