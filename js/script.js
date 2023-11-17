var player;
var playerScore = 0;
var computer;
var computerScore = 0;

var choices = ["rock", "paper", "scissors"];

window.onload = function() {
  let buttons = document.querySelectorAll(".choices button");
  buttons.forEach(button => {
    button.addEventListener("click", selectChoice);
  });
};

function selectChoice() {
  player = this.id;
  document.getElementById("player-choice").src = "assets/imgs/rps-img/" + player + ".jpg";

  computer = choices[Math.floor(Math.random() * 3)];
  document.getElementById("computer-choice").src = "assets/imgs/rps-img/" + computer + ".jpg";

  // Check for the winner
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


  resetButton.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.innerText = '';
    computerScoreDisplay.innerText = '';
    canPlay = true;
  });


  document.getElementById("player-score").innerText = playerScore;
  document.getElementById("computer-score").innerText = computerScore;
}






// what beats what

// need the buttons and know when someone clixks

// need to know wht button was clicked

// need to know what their hand beats

// get a cpu guess

// check who wins

// if the plyer wins then playerScore + 1

// if the cpu wins then cpuScore + 1

// if it's a draw then move on

// game ends when someone has a socre of 10

// allow user to reset and play again
