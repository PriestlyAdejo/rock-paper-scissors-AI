"use strict";
let introButtons = document.querySelectorAll('.introFrame .rpsItems button');
let container = document.querySelector('.introFrame .rpsItems');
var radius = 150; // Adjust this value to set the radius of the circle
var angle = 0;
var angleIncrement = (2 * Math.PI) / introButtons.length;

for (const button of introButtons) {
    console.log(button)
  let x = Math.round(radius * Math.sin(angle)) + 'px';
  let y = Math.round(radius * Math.cos(angle)) + 'px';
  button.style.transform = 'translate(' + x + ', ' + y + ')';
  angle += angleIncrement;
}


const game = ()=> {
    let pScore = 0;
    let cScore = 0;

    const startGame = () => {
        const playBtn = document.querySelector(".intro button")
        const introScreen = document.querySelector(".intro")
        const gameFrame = document.querySelector(".gameFrame")

        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut")
            gameFrame.classList.add("fadeIn")
        })

    }

    startGame();
}
game();