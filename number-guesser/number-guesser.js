let prompt = require("prompt-sync")();
let random = Math.floor(Math.random() * 100);
var answers = [];
var uniqueAnswers = [];
var answer = "";

while (answer !== random) {
  uniqueAnswers = [...new Set(answers)];
  answer = prompt("Guess a number: ");

  if (answer == random) {
    console.log("You got it! You took " + (uniqueAnswers.length + 1) + " attempts");
    break;
  }
  if (answers.length > 0) {
    for (var i = 0; i < answers.length; i++) {
      if (answer === answers[i]) {
        console.log("Already guessed!");
        continue;
      }
    }
  }
  if (answer > random) {
  console.log("Too High!");
  answers.push(answer);
  }
  if (answer < random) {
  console.log("Too Low!");
  answers.push(answer);
  }
  if (isNaN(answer)) {
  console.log("Not a number! Try again!");
  answers.push(answer);
  }
}