const ul = document.querySelector(".highscore-list");

async function loadHighscore() {
  const res = await fetch("/api/highscore");
  const payload = await res.json();
  return payload;
}

const users = loadHighscore();
users.then((user) => {
  user.forEach((userHighscore) => {
    const name = userHighscore.name;
    const time = userHighscore.time;
    const guesses = userHighscore.guesses;
    const wordLength = userHighscore.wordLength;
    const unique = userHighscore.unique;

    const li = document.createElement("li");
    //li.classList.add("max-w-32");
    const p = document.createElement("p");
    li.innerHTML = `<div class="m-5 mb-6 drop-shadow-md text-lg flex flex-col sm:flex-row  bg-gray-300 p-2 rounded  ">
    
    <p class="name font-bold mx-3">Name: <p>${name}</p>
    <p class="time font-bold mx-3">Time: <p>${time} s</p> 
    
    <p class="guesses font-bold mx-3">Guesses:  <p> ${guesses}</p>
    <p class="wordlength font-bold mx-3">Word length: <p>${wordLength}</p>
    <p class="unique font-bold mx-3">Unique letters: <p>${unique}</p></div>`;

    ul.appendChild(li);
  });
});
