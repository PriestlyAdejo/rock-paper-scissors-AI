const game = (bestOutOf=5) => {
    let pScore = 0;
    let cScore = 0;

    // Start the game
    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
            match.classList.remove("fadeOut");
        })
    };

    // Play match
    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll(".hands img");
        const computerOptions = ["rock", "paper", "scissors"];

        hands.forEach(hand => {
            hand.addEventListener("animationend", function () {
                this.style.animation = ""
            });
        })
        
        options.forEach(option => {
            option.addEventListener("click", function() {
                const computerNumber = Math.floor(Math.random() * 3); 
                const computerChoice = computerOptions[computerNumber];
                
                setTimeout(() => {
                    compareHands(this.textContent, computerChoice);
                    updateScore();
                    updateImage(this.textContent, playerHand);
                    updateImage(computerChoice, computerHand);
                }, 2000)
                
                playerHand.style.animation = "shakePlayer 2s ease"
                computerHand.style.animation = "shakeComputer 2s ease"

            })
        });   
    };

    const compareHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector(".winner")

        if (playerChoice === computerChoice) {
            winner.textContent = "It's a Tie!";
            return ;
        } else if (playerChoice === "rock") {
            if (computerChoice === "scissors") {
                winner.textContent = "Player Wins!"
                pScore++
            } else {
                winner.textContent = "Computer Wins!";
                cScore++
            }
            return;
        } else if (playerChoice === "paper") {
            if (computerChoice === "rock") {
                winner.textContent = "Player Wins!"
                pScore++
            } else {
                winner.textContent = "Computer Wins!";
                cScore++
            }
            return;
        } else if (playerChoice === "scissors") {
            if (computerChoice === "paper") {
                winner.textContent = "Player Wins!"
                pScore++
            } else {
                winner.textContent = "Computer Wins!";
                cScore++
            }
            return;
        };
    };

    const updateImage = (imgChoice, srcObj) => {
        if (imgChoice === "rock") {
            srcObj.src = `./imgs/raised-fist_270a.png`;
        } else if (imgChoice === "paper") {
            srcObj.src = `./imgs/waving-hand_1f44b.png`;
        } else if (imgChoice === "scissors") {
            srcObj.src = `./imgs/victory-hand_270c-fe0f.png`;
        };
    };

    const updateScore = () => {
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };

    startGame()

    // Main game while loop
    do {
        playMatch()
    } while ((cScore < bestOutOf) || (pScore < bestOutOf))

    // Display screen to show winner
    if (cScore < pScore) {
        console.log("Player Won!")
    } else {
        console.log("Computer Won!")
    }

}

// Running entire game.
game()