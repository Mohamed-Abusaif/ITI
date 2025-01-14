import { alphabet } from "./data.js";
import { mapCallback, getRandomWord } from "./category.js";

export function initGame(button, clickedLetter, state) {
  const { word, incorrectGusses, theGuyToKill, wordDisplay } = state;
  button.disabled = true;

  if (word.toLowerCase().indexOf(clickedLetter) !== -1) {
    console.log("correct guess");
    const letters = document.getElementsByClassName("letter");
    for (let i = 0; i < word.length; i++) {
      if (word[i].toLowerCase() === clickedLetter) {
        letters[i].style.visibility = "visible";
      }
    }
  } else {
    console.log("incorrect guess");
    state.incorrectGuessCount++;
    incorrectGusses.innerHTML = `Incorrect guesses: <b>${state.incorrectGuessCount} / 6</b>`;
    theGuyToKill.getElementsByTagName(
      "img"
    )[0].src = `images/hangman-${state.incorrectGuessCount}.svg`;
  }

  if (state.incorrectGuessCount === 6) {
    alert("Game Over");
    location.reload();
  }

  const displayedWord = Array.prototype.map
    .call(document.getElementsByClassName("letter"), (letter) =>
      letter.style.visibility === "visible" ? letter.innerText : "_"
    )
    .join("");

  if (displayedWord.toLowerCase() === word.toLowerCase()) {
    alert("You Won!");
    location.reload();
  }
}

export function setupKeyboard(keyboard, state) {
  for (let i = 0; i < alphabet.length; i++) {
    const button = document.createElement("button");
    button.innerText = alphabet[i];
    button.onclick = function () {
      initGame(this, alphabet[i], state);
    };
    keyboard.appendChild(button);
  }
}
