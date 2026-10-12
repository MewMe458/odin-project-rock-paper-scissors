const resultsDiv = document.querySelector("#results");
const scoreDiv = document.querySelector("#score");
const announcementDiv = document.querySelector("#announcement");

let humanScore = 0;
let computerScore = 0;
let gameActive = true;

function updateDisplay(message) {
    resultsDiv.innerText = message;
}

function updateScoreDisplay() {
    scoreDiv.innerText = `Player: ${humanScore} | Computer: ${computerScore}`;
}

function handleChoice(playerSelection) {
    if (!gameActive) return;

    const computerSelection = computerChoice();
    const winner = playRound(playerSelection, computerSelection);

    if (winner === "human") {
        humanScore++;
    } else if (winner === "computer") {
        computerScore++;
    }

    updateScoreDisplay();
    checkWinner();
}

function checkWinner() {
    if (humanScore === 5) {
        announcementDiv.innerText = "Congratulations! You won the game!";
        gameActive = false;
    } else if (computerScore === 5) {
        announcementDiv.innerText = "Game Over! The computer won the game!";
        gameActive = false;
    }
}

function computerChoice() {
    let finalChoice = Math.floor(Math.random() * 3);
    if (finalChoice == 0) return "rock";
    if (finalChoice == 1) return "paper";
    return "scissors";
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice.toLowerCase() == "scissors") {
        if (computerChoice == "rock") {
            updateDisplay("You chose scissors, computer chose rock. Computer wins!");
            return "computer";
        } else if (computerChoice == "paper") {
            updateDisplay("You chose scissors, computer chose paper. You win!");
            return "human";
        } else {
            updateDisplay("You and computer both chose scissors. It's a tie!");
            return "tie";
        }
    } else if (humanChoice.toLowerCase() == "rock") {
        if (computerChoice == "rock") {
            updateDisplay("You and computer both chose rock. It's a tie!");
            return "tie";
        } else if (computerChoice == "paper") {
            updateDisplay("You chose rock, computer chose paper. Computer wins!");
            return "computer";
        } else {
            updateDisplay("You chose rock, computer chose scissors. You win!");
            return "human";
        }
    } else if (humanChoice.toLowerCase() == "paper") {
        if (computerChoice == "rock") {
            updateDisplay("You chose paper, computer chose rock. You win!");
            return "human";
        } else if (computerChoice == "paper") {
            updateDisplay("You and computer both chose paper. It's a tie!");
            return "tie";
        } else {
            updateDisplay("You chose paper, computer chose scissors. Computer wins!");
            return "computer";
        }
    } else {
        updateDisplay("Invalid answer. Computer wins by default.");
        return "computer";
    }
}

const rockBtn = document.querySelector("#Rockbtn");
const paperBtn = document.querySelector("#Paperbtn");
const scissorsBtn = document.querySelector("#Scissorsbtn");

rockBtn.addEventListener("click", () => handleChoice("rock"));
paperBtn.addEventListener("click", () => handleChoice("paper"));
scissorsBtn.addEventListener("click", () => handleChoice("scissors"));