// POSSIBLE CHOICES AND SCORE VARIABLES
const choices = ["rock", "paper", "scissors"];
let playerScore = 0, computerScore = 0;

// SCORE DIV
const scoreDiv = document.querySelector('.score');
const scoreH1 = document.createElement('h1');
scoreDiv.appendChild(scoreH1);
scoreH1.innerText = `Score: \n Player: ${playerScore} vs ${computerScore} Computer`;

// BUTTONS 
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

// OUTCOME DIV
const outcomeDiv = document.querySelector('.outcome');
const p = document.createElement('p');
outcomeDiv.appendChild(p)

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
            p.innerText = "It's a Tie!";  
      }
      else if (result == "Player") {
            playerScore++;
            p.innerText = `You win!: ${playerSelection} beats ${computerSelection}! :D`;
      }
      else {
            computerScore++;
            p.innerText = `You lose!: ${computerSelection} beats ${playerSelection}! :(`;
      }
      if (computerScore == 5) {
            scoreH1.innerText = 'The computer won! :( \n'+
                  `Score: \n Player: ${playerScore} vs ${computerScore} Computer`;
            computerScore = 0;
            playerScore = 0;
      }
      else if (playerScore == 5) {
            scoreH1.innerText = 'You won! Congratulations!\n'+
            `Score: \n Player: ${playerScore} vs ${computerScore} Computer`;
            computerScore = 0;
            playerScore = 0;
      }
      else {
            scoreH1.innerText = `Score: \n Player: ${playerScore} vs ${computerScore} Computer`;
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
