/*the code declares variables to store information for the 
rock-paper-scissors game. computer/player score, initialized to 0*/
let player;
let playerScore = 0;
let computer;
let computerScore = 0;
let canPlay = true;

/*array intended to represent the possible choices in game*/
let choices = ['rock', 'paper', 'scissors'];

/* event listeners for each button inside the element with the 
class "choices." adds a "click" event listener to each button
when clicked to call a function */
window.onload = function () {
  let buttons = document.querySelectorAll('.btn-choices button');
  buttons.forEach((button) => {
    button.addEventListener('click', selectChoice);
  });

  /*reset button*/
  let resetButton = document.getElementById('reset');
  resetButton.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    document.getElementById('player-score').innerText = playerScore;
    document.getElementById('computer-score').innerText = computerScore;

    // Reset player and computer choices images
    document.getElementById('player-choice').src =
      'assets/imgs/rps-img/hand.jpg';
    document.getElementById('computer-choice').src =
      'assets/imgs/rps-img/hand.jpg';
  });
};

/*updates the displayed images for both the player's and computer's choices*/
function selectChoice() {
  player = this.id;
  document.getElementById('player-choice').src =
    'assets/imgs/rps-img/' + player + '.jpg';

  computer = choices[Math.floor(Math.random() * 3)];
  document.getElementById('computer-choice').src =
    'assets/imgs/rps-img/' + computer + '.jpg';

  /*determines the outcome of a round in a rock-paper-scissors game and updates the scores*/
  if (player === computer) {
    Swal.fire({
      position: 'top',
      icon: 'info',
      title: 'Draw',
      showConfirmButton: false,
      allowOutsideClick: false,
      timer: 2000,
    });
  } else {
    if (
      (player === 'rock' && computer === 'scissors') ||
      (player === 'scissors' && computer === 'paper') ||
      (player === 'paper' && computer === 'rock')
    ) {
      playerScore++;
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'You win',
        showConfirmButton: false,
        allowOutsideClick: false,
        timer: 2000,
      });
    } else {
      Swal.fire({
        position: 'top',
        icon: 'error',
        title: 'You lose',
        showConfirmButton: false,
        allowOutsideClick: false,
        timer: 2000,
      });
      computerScore++;
    }
  }

  /*sets the text inside these elements to the respective scores*/
  document.getElementById('player-score').innerText = playerScore;
  document.getElementById('computer-score').innerText = computerScore;

  if (playerScore >= 3) {
    endGame('player');
  } else if (computerScore >= 3) {
    endGame('cpu');
  }
}

function endGame(winner) {
  console.log(winner);
  Swal.fire({
    position: 'center',
    icon: winner === 'player' ? 'success' : 'error',
    title: `${winner} wins!`,
    showConfirmButton: false,
    allowOutsideClick: false,
    timer: 2000,
  });
}
