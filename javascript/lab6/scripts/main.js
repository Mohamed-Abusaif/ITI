import { getRandomWord, mapCallback } from "./category.js";
import { setupKeyboard } from "./game.js";

const keyboard = document.getElementById("keyboard");
const incorrectGusses = document.getElementById("IncorrectGuesses");
const theGuyToKill = document.getElementById("theGuyToKill");
const wordDisplay = document.getElementById("word-display");

const state = {
  word: "",
  incorrectGuessCount: 0,
  incorrectGusses,
  theGuyToKill,
  wordDisplay,
};

// Initialize the game
state.word = getRandomWord();
wordDisplay.innerHTML = state.word
  .split("")
  .map((char) => mapCallback(char))
  .join("");

// Set up the keyboard
setupKeyboard(keyboard, state);
