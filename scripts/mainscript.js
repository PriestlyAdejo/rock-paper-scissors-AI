'use strict';

// Simple Rock Paper Scissors Game
// 0 is Rock, 1 is Paper, 2 is Scissors!
// Each value in the game has a precdence.
let computerScore = 0;
let userScore = 0;
let getUserChoice = prompt("Enter your Choice (Rock, Paper or Scissors)", "")
let getComputerChoice = Math.floor(Math.random() * 3)

console.log("AFTER INITIAL DEFS")

function playRound (userChoice, computerChoice) {
    let choicesArr = ["rock", "paper", "scissors"]
    let computerChoiceStr = choicesArr[computerChoice]
    let userChoiceClean = userChoice.toLowerCase().replace("/\/g", '')

    console.log(userChoice)

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

    } else {

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

function playMatch (userChoiceFunc = getUserChoice(),
                    computerChoiceFunc = getComputerChoice(),
                    totalRounds = 5) {
    do {
        prevRound = playRound(userChoiceFunc, computerChoiceFunc)
        incrementScores(prevRound)

        console.log(`Computer Score: ${computerScore}, User Score: ${userScore}`)
        if (computerScore || userScore) {
            debugger;
         }


    } while ((computerScore != totalRounds) || (userScore !=totalRounds))

    if (computerScore > userScore) {
        alert(`Computer won the match! ComputerScore: ${computerScore},
        UserScore: ${userScore}`)
    } else {
        alert(`User won the match! ComputerScore: ${computerScore},
        UserScore: ${userScore}`)
    }
}

// Playing our game
playMatch()