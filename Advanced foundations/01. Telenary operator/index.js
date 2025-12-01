const playerGuess = 9;
const correctAnswer = 6;

// let message = playerGuess === correctAnswer ? "Correct" : "Wrong";

let message =
  playerGuess > correctAnswer
    ? "Too High"
    : playerGuess < correctAnswer
    ? "Too low"
    : "Correct Answer";
console.log(message);
