"use-strict";

// Get elements from the DOM
const playerScoreBoard = document.querySelector(".playerCount");
const computerScoreBoard = document.querySelector(".computerCount");
const result = document.querySelector(".results");
const buttons = document.querySelector(".buttons");
const gameElement = document.querySelector(".game");
const restartContainer = document.createElement("div");
const restart = document.createElement("button");
restartContainer.className = "restartContainer";
restart.className = "restartBtn";

// Set initial scores and moves
let playerScore = 0;
let computerScore = 0;
let moves = 0;

// Define array of possible computer choices
const computerChoices = ["Rock", "Paper", "Scissors"];

// Function to play one round of the game
function playRound(playerSelection) {
  moves++;

  // Generate computer selection randomly
  const computerSelection = computerChoices[Math.floor(Math.random() * 3)];
  
  // Clear previous round result so messages don't accumulate
  result.textContent = "";

  // Determine winner of the round
  if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    const tie = document.createElement("p");
    tie.textContent = "It's a tie!";
    result.appendChild(tie);
  } else if (
    (playerSelection.toLowerCase() === "rock" &&
      computerSelection.toLowerCase() === "paper") ||
    (playerSelection.toLowerCase() === "paper" &&
      computerSelection.toLowerCase() === "scissors") ||
    (playerSelection.toLowerCase() === "scissors" &&
      computerSelection.toLowerCase() === "rock")
  ) {
    const lost = document.createElement("p");
    lost.textContent = "You lost!";
    result.appendChild(lost);
    computerScore++;
    computerScoreBoard.textContent = computerScore;
  } else {
    const won = document.createElement("p");
    won.textContent = "You won!";
    result.appendChild(won);
    playerScore++;
    playerScoreBoard.textContent = playerScore;
  }

  // Check if game is over
  if (moves === 5) {
    gameOver();
  }
}

// Function to end the game
function gameOver() {
  buttons.style.display = "none";

  // Determine end game message and append as a <p> element
  const endMsg = document.createElement("p");
  if (computerScore === playerScore) {
    endMsg.textContent = "Tie game!";
  } else if (computerScore > playerScore) {
    endMsg.textContent = "You lost the game!";
  } else {
    endMsg.textContent = "You won the game!";
  }
  result.appendChild(endMsg);

  // Add restart button
  restartContainer.append(restart);
  gameElement.appendChild(restartContainer);
  restart.textContent = "Restart";
  restart.addEventListener("click", () => {
    window.location.reload();
  });
}

// Add event listeners to buttons
buttons.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    playRound(event.target.textContent);
  }
});