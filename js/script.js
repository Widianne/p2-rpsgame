/*the code declares variables to store information for the 
rock-paper-scissors game. computer/player score, initialized to 0*/ 
var player;
var playerScore = 0;
var computer;
var computerScore = 0;

/*array intended to represent the possible choices in game*/ 
var choices = ["rock", "paper", "scissors"];

/* event listeners for each button inside the element with the 
class "choices." adds a "click" event listener to each button
when clicked to call a function */
window.onload = function() {
  let buttons = document.querySelectorAll(".choices button");
  buttons.forEach(button => {
    button.addEventListener("click", selectChoice);
  });

  /*reset button*/
  let resetButton = document.getElementById("reset");
  resetButton.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    document.getElementById("player-score").innerText = playerScore;
    document.getElementById("computer-score").innerText = computerScore;

    // Reset player and computer choices images
    document.getElementById("player-choice").src = "assets/imgs/rps-img/hand.jpg";
    document.getElementById("computer-choice").src = "assets/imgs/rps-img/hand.jpg";
  });
};

/*updates the displayed images for both the player's and computer's choices*/
function selectChoice() {
  player = this.id;
  document.getElementById("player-choice").src = "assets/imgs/rps-img/" + player + ".jpg";

  computer = choices[Math.floor(Math.random() * 3)];
  document.getElementById("computer-choice").src = "assets/imgs/rps-img/" + computer + ".jpg";

  /*determines the outcome of a round in a rock-paper-scissors game and updates the scores*/
  if (player === computer) {
    playerScore += 1;
    computerScore += 1;
  } else {
    if (
      (player === "rock" && computer === "scissors") ||
      (player === "scissors" && computer === "paper") ||
      (player === "paper" && computer === "rock")
    ) {
      playerScore += 1;
    } else {
      computerScore += 1;
    }
  }

  /*sets the text inside these elements to the respective scores*/
  document.getElementById("player-score").innerText = playerScore;
  document.getElementById("computer-score").innerText = computerScore;
}
