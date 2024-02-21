const joke = document.querySelector(".joke");
const btn = document.querySelector(".btn");
const url = "https://api.chucknorris.io/jokes/random";

btn.addEventListener("click", getJoke);

async function getJoke() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    joke.innerHTML = data.value;
  } catch (error) {
    joke.innerHTML = error.message;
  }
}
