/*eslint-env broswer*/
/*jslint devel: true */

//User makes a choice
var userChoice = prompt("Let's play! \nRock, Paper, or Scissors?");

//Computer makes choice
var compChoice = Math.random();
if (compChoice < 0.33) {
    compChoice = "Rock";
} else if (compChoice <= 0.67) {
    compChoice = "Paper";
} else {
    compChoice = "Scissors";
}

//Who wins
var compare = function (userChoice, compChoice) {
    "use strict";
    if (userChoice === compChoice) {
        return "It's a tie!" + " Play again.";
    } else if (userChoice === "Rock" || userChoice === "rock") {
        if (compChoice === "Scissors") {
            return "Rock wins!";
        } else {
            return "Paper wins!";
        }
    }
    if (userChoice === "Paper" || userChoice === "paper") {
        if (compChoice === "Rock") {
            return "Paper wins!";
        } else {
            return "Scissors wins!";
        }
    }
    if (userChoice === "Scissors" || userChoice === "scissors") {
        if (compChoice === "Rock") {
            return "Rock wins!";
        } else {
            return "Scissors wins!";
        }
    } else {
        return "Nope. Try again! Enter Rock, Paper or Scissors.";
    }
};
alert("Comp chose " + compChoice + "!");
alert(compare(userChoice, compChoice));