import {
  randomWords,
  animalsWords,
  moviesWords,
  countriesWords,
} from "./data.js";

export function mapCallback(char) {
  return `<li class="letter" style="visibility:hidden">${char}</li>`;
}

export function getRandomWord() {
  const category = prompt(
    "Enter a category: animals, movies, random, country"
  ).toLowerCase();
  let wordsArray;

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

  const randomIndex = Math.floor(Math.random() * wordsArray.length);
  return wordsArray[randomIndex];
}
