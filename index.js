const choices = ["rock", "paper", "scissors"];
let playerScore = 0, computerScore = 0;

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const scoreDiv = document.querySelector('.score');

function getComputerChoice() {
      return choices[Math.floor(Math.random() * 3)];
}

function checkWinner(playerSelection, computerSelection) {
      if (playerSelection == computerSelection) return "Tie";
      else if (
            (playerSelection == "rock" && computerSelection == "scissors") ||
            (playerSelection == "scissors" && computerSelection == "paper") ||
            (playerSelection == "paper" && computerSelection == "rock"))
            return "Player";
      else return "Computer";
}

function playRound(playerSelection, computerSelection) {
      const result = checkWinner(playerSelection, computerSelection);
      const p = document.createElement('p');
      
      if (result == "Tie") {
            p.innerText = "It's a Tie!";
            scoreDiv.appendChild(p)
      }
      else if (result == "Player") {
            playerScore++;
            p.innerText = `You win! ${playerSelection} beats ${computerSelection}!`;
            scoreDiv.appendChild(p)
      }
      else {
            computerScore++;
            p.innerText = `You lose! ${computerSelection} beats ${playerSelection}!`;
            scoreDiv.appendChild(p)
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

/*function game() {
      console.log("Welcome!");
      let playerScore = 0, computerScore = 0;
      let score = `Player: ${playerScore} vs Computer:$ {computerScore}`;
      // console.log(score);
      for (let i = 0; i < 5; i++) {
            const playerSelection = getPlayerChoice();
            const computerSelection = getComputerChoice();
            if (checkWinner(playerSelection, computerSelection) == "Player") {
                  playerScore++;
            }
            else if (checkWinner(playerSelection, computerSelection) == "Computer") {
                  computerScore++;
            }
            score = `Player: ${playerScore} vs Computer: ${computerScore}`;
            console.log(score);
            console.log(playRound(playerSelection, computerSelection));
            console.log("-------------------------")
      }
      if (playerScore > computerScore) {
            console.log('You win!');
      }
      else if (playerScore < computerScore) {
            console.log('You lose!');
      }
      else {
            console.log('It\'s a tie!');
      }
}

game();*/
