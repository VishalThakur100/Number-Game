let randomnum = parseInt(Math.random() * 100 + 1);
// console.log(random);

const userInput = document.querySelector(".guess-field");
const submit = document.querySelector("#sub");
const preval = document.querySelector(".guesses");
const lastresult = document.querySelector(".lastresult");
const lowOrHi = document.querySelector(".loOrhi");
const result = document.querySelector(".results");

const para = document.createElement("p");

let prevGuess = [];
let numGuess = 1;
let gamePlay = true;

if (gamePlay) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter a number Greater than 1");
  } else if (guess > 100) {
    alert("Please enter a number less than 100");
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random Number was ${randomnum}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomnum) {
    displayMessage(`You Guessed it right`);
    endGame();
  } else if (guess < randomnum) {
    displayMessage(`Number is too low`);
  } /*(guess > randomnum)*/ else {
    displayMessage(`Number is too high`);
  }
}

function displayGuess(guess) {
  userInput.value = "";
  preval.innerHTML += `${guess}, `;
  numGuess++;
  lastresult.innerHTML = `${11 - numGuess}`;
}

function displayMessage(msg) {
  lowOrHi.innerHTML = `<h2>${msg}</h2>`;
}
function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  para.classList.add("button");
  para.innerHTML =
    '<h2 id="newGame" style="text-align: center;">Start new Game</h2>';
  result.appendChild(para);
  gamePlay = false;
  newGame();
}
function newGame() {
  const newGamebtn = document.querySelector("#newGame");
  newGamebtn.addEventListener("click", function (e) {
    randomnum = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    preval.innerHTML = "";
    lastresult.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute("disabled");
    result.removeChild(para);
    gamePlay = true;
  });
}
