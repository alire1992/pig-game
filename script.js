"use strict";

// Selecting element
const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const currentScore0El = document.querySelector("#current--0");
const currentScore1El = document.querySelector("#current--1");
const diceEl = document.querySelector(".dice");
const btnRollDice = document.querySelector(".btn--roll");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");

// Starting condition
score0El.textContent = 0;
score1El.textContent = 0;
const scores = [0, 0];
let activePlayer = 0;
let currentScore = 0;

// Implement roll dice functionality
btnRollDice.addEventListener("click", () => {
  const dice = Math.trunc(Math.random() * 6) + 1;

  if (diceEl.classList.contains("hidden")) diceEl.classList.remove("hidden");

  diceEl.src = `dice-${dice}.png`;
  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer ? 0 : 1;
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
  }
});
