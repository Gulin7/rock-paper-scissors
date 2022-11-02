
// POSSIBLE CHOICES AND SCORE VARIABLES
const choices = ["rock", "paper", "scissors"];
let playerScore = 0, computerScore = 0;

// SCORE DIV
const scoreDiv = document.querySelector('.scoreboard');
const score = document.querySelector('.score');
const outcome = document.querySelector('.outcome');

// BUTTONS 
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

function getComputerChoice() {
      // Returns a random choice from the choice-array we created at the top of the doc
      return choices[Math.floor(Math.random() * 3)];
}

function checkWinner(playerSelection, computerSelection) {
      if (playerSelection == computerSelection) return "Tie"; // same choice = a tie in rock-paper-scissors
      else if ( // those are the cases in which player wins, therefore returns player
            (playerSelection == "rock" && computerSelection == "scissors") ||
            (playerSelection == "scissors" && computerSelection == "paper") ||
            (playerSelection == "paper" && computerSelection == "rock"))
            return "Player";
      else return "Computer";
      // if the player didn't win then the computer won
}

function playRound(playerSelection, computerSelection) {
      const result = checkWinner(playerSelection, computerSelection);
      if (result == "Tie") {
            outcome.innerText = "It's a Tie!";
      }
      else if (result == "Player") {
            playerScore++;
            outcome.innerText = `You win... ${playerSelection} beats ${computerSelection} :D`;
      }
      else {
            computerScore++;
            outcome.innerText = `You lose... ${computerSelection} beats ${playerSelection} :(`;
      }
      if (computerScore == 5) {
            outcome.innerText = 'The computer won :(';
            swal({
                  text: 'The computer won :(',
                  confirmButtonText: 'GG',
                  confirmButtonColor: '#3085d6', 
                  
            });
            score.innerText = `Player ${playerScore} vs ${computerScore} Computer`;
            computerScore = 0;
            playerScore = 0;
      }
      else if (playerScore == 5) {
            score.innerText = `Player ${playerScore} vs ${computerScore} Computer`;
            swal({
                  text: 'YOU WON!!!',
                  confirmButtonText: 'GG',
                  confirmButtonColor: '#3085d6',
                  // background: `./images/victory-royale.gif` not working
            });
            computerScore = 0;
            playerScore = 0;
      }
      else {
            score.innerText = `Player ${playerScore} vs ${computerScore} Computer`;
      }
}

function getPlayerChoice() {
      let ValidInput = false;
      while (ValidInput == false) {
            const choice = prompt("Rock Paper Scissors");
            if (choice == null) {
                  continue;
            }
            const finalChoice = choice.toLowerCase();
            if (choices.includes(finalChoice)) {
                  ValidInput = true;
                  return finalChoice;
            }
      }

}

rockButton.addEventListener('click', () => {
      const computerSelection = getComputerChoice();
      const playerSelection = 'rock';
      playRound(playerSelection, computerSelection);
});
paperButton.addEventListener('click', () => {
      const computerSelection = getComputerChoice();
      const playerSelection = 'paper';
      playRound(playerSelection, computerSelection);
});
scissorsButton.addEventListener('click', () => {
      const computerSelection = getComputerChoice();
      const playerSelection = 'scissors';
      playRound(playerSelection, computerSelection);
});

