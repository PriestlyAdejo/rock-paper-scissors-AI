'use strict';

// Simple Rock Paper Scissors Game
// 0 is Rock, 1 is Paper, 2 is Scissors!
// Each value in the game has a precdence.
let computerScore = 0;
let userScore = 0;


function playRound () {
    let getUserChoice = prompt("Enter your Choice (Rock, Paper or Scissors)", "")
    let getComputerChoice = Math.floor(Math.random() * 3)
    let choicesArr = ["rock", "paper", "scissors", "r", "p", "s"]
    let computerChoiceStr = choicesArr[getComputerChoice]
    let userChoiceClean = getUserChoice.toLowerCase().replace("/\/g", '')

    if (computerChoiceStr == "rock") {

        if (userChoiceClean == "rock") {
            return "tie"
        } else if (userChoiceClean == "paper") {
            return "user wins"
        } else {
            return "computer wins"
        }

    } else if (computerChoiceStr == "paper") {

        if (userChoiceClean == "rock") {
            return "computer wins"
        } else if (userChoiceClean == "paper") {
            return "tie"
        } else {
            return "user wins"
        }

    } else if (computerChoiceStr == "scissors") {

        if (userChoiceClean == "rock") {
            return "user wins"
        } else if (userChoiceClean == "paper") {
            return "computer wins"
        } else {
            return "tie"
        }
    }
}

// Function only increments scores does not return them.
function incrementScores (prevRound) {
    if (prevRound == "user wins") {
        userScore++ // Uses next value in increment
    } else if (prevRound == "computer wins") {
        computerScore++
    }
}

function playMatch (totalRounds = 5) {
    let prevRound;
    while (userScore < totalRounds && computerScore < totalRounds) {
        prevRound = playRound()
        incrementScores(prevRound)
        alert(`${prevRound} ---> Playing for best out of ${totalRounds}
               ComputerScore: ${computerScore} | UserScore: ${userScore}`)
    }

    alert(`${totalRounds} rounds were played:`)
    if (computerScore > userScore) {
        alert(`Computer won the match! ComputerScore: ${computerScore},
        UserScore: ${userScore}`)
    } else {
        alert(`User won the match! ComputerScore: ${computerScore},
        UserScore: ${userScore}`)
    }
}

playMatch(5)