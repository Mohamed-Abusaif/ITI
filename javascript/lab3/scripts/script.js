var alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var keyboard = document.getElementById("keyboard");
var incorrectGusses = document.getElementById("IncorrectGuesses");
var theGuyToKill = document.getElementById("theGuyToKill");
var wordDisplay = document.getElementById("word-display");

var randomWords = [
  "guitar",
  "oxygen",
  "mountain",
  "painting",
  "football",
  "butterfly",
  "pizza",
  "jazz",
  "camera",
  "adventure",
];
var animalsWords = ["cat", "dog", "mouse", "elephant"];
var moviesWords = ["La La Land", "fight club", "no country for old men"];
var countriesWords = ["Egypt", "USA", "UAE", "Russia", "Germany"];
var categories = ["animals", "movies", "random", "country"];

var word = "";
var incorrectGuessCount = 0;

// Show word on the page:
function mapCallback(char) {
  return '<li class="letter" style="visibility:hidden">' + char + "</li>";
}

// Callback function for map:
function getRandomWord() {
  var category = prompt(
    "Enter a category: animals, movies, random, country"
  ).toLowerCase();
  var wordsArray;

  switch (category) {
    case "animals":
      wordsArray = animalsWords;
      break;
    case "movies":
      wordsArray = moviesWords;
      break;
    case "random":
      wordsArray = randomWords;
      break;
    case "country":
      wordsArray = countriesWords;
      break;
    default:
      alert("Invalid category. Defaulting to random.");
      wordsArray = randomWords;
  }
//search for math.random and don't copy without understand
  var randomIndex = Math.floor(Math.random() * wordsArray.length);
  word = wordsArray[randomIndex];
  wordDisplay.innerHTML = word
    .split("")
    .map(function (char) {
      return mapCallback(char);
    })
    .join("");
}

function initGame(button, clickedLetter) {
  console.log("clickedLetter:", clickedLetter);
  button.disabled = true;
  if (word.toLowerCase().indexOf(clickedLetter) !== -1) {
    console.log("correct guess");
    // update the wordDisplay
    var letters = document.getElementsByClassName("letter");
    for (var i = 0; i < word.length; i++) {
      if (word[i].toLowerCase() === clickedLetter) {
        letters[i].style.visibility = "visible";
      }
    }
  } else {
    console.log("incorrect guess");
    incorrectGuessCount++;
    incorrectGusses.innerHTML =
      "Incorrect guesses: <b>" + incorrectGuessCount + " / 6</b>";
    theGuyToKill.getElementsByTagName("img")[0].src =
      "images/hangman-" + incorrectGuessCount + ".svg";
  }
  if (incorrectGuessCount === 6) {
    alert("Game Over");
    location.reload();
  }
  var displayedWord = Array.prototype.map
    .call(document.getElementsByClassName("letter"), function (letter) {
      return letter.style.visibility === "visible" ? letter.innerText : "_";
    })
    .join("");
  if (displayedWord.toLowerCase() === word.toLowerCase()) {
    alert("You Won!");
    location.reload();
  }
}

// Dynamic buttons
for (var i = 0; i < alphabet.length; i++) {
  var button = document.createElement("button");
  button.innerText = alphabet[i];
  button.onclick = (function (letter) {
    return function () {
      initGame(this, letter);
    };
  })(alphabet[i]);
  keyboard.appendChild(button);
}

// Initialize the game
getRandomWord();
