export default function guessWord(word, guess) {
  let result = [];
  word = word.toUpperCase();
  guess = guess.toUpperCase();

  let misplacedLetter = [];
  let correctLetter = [];
  let incorrectLetter = [];

  for (let i = 0; i < 5; i++) {
    result[i] = { letter: guess[i], result: "" };
    if (guess[i] === word[i]) {
      correctLetter.push(guess[i]);
      result[i].result = "Correct";
    } else if (word.includes(guess[i])) {
      misplacedLetter.push(guess[i]);
      result[i].result = "Misplaced";
    } else {
      incorrectLetter.push(guess[i]);
      result[i].result = "Incorrect";
    }
  }

  for (let y = 0; y < 5; y++) {
    if (
      word.includes(guess[y]) &&
      result[y].result == "Misplaced" &&
      correctLetter.includes(guess[y])
    ) {
      result[y].result = "Incorrect";
    }
  }


  return result;
}