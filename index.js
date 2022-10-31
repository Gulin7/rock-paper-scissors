const choices = ["rock", "paper", "scissors"];

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
      if (result == "Tie") {
            return "It's a Tie!";
      }
      else if (result == "Player") {
            return `You win! ${playerSelection} beats ${computerSelection}!`;
      }
      else {
            return `You lose! ${computerSelection} beats ${playerSelection}!`;
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
function game() {
      console.log("Welcome!");
      let playerScore = 0,
            computerScore = 0;
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

game();
