function handleChoice(playerSelection) {
    const computerSelection = computerChoice();
    playRound(playerSelection, computerSelection);
}

function computerChoice() {
    let finalChoice = Math.floor(Math.random() * 3);
    if (finalChoice == 0) {
        return "rock";
    }
    else if (finalChoice == 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice.toLowerCase() == "scissors") {
        if (computerChoice == "rock") {
            console.log("You choose scissors, computer choose rock.");
            console.log("Computer wins!");
            return "computer";
        }
        else if (computerChoice == "paper") {
            console.log("You choose scissors, computer choose paper.");
            console.log("You win!");
            return "human";
        }
        else {
            console.log("You and computer choose scissors.");
            console.log("It's a tie!");
            return "tie";
        }
    }
    else if (humanChoice.toLowerCase() == "rock") {
        if (computerChoice == "rock") {
            console.log("You and computer choose rock.");
            console.log("It's a tie!");
            return "tie";
        }
        else if (computerChoice == "paper") {
            console.log("You choose rock, computer choose paper.");
            console.log("Computer wins!");
            return "computer";
        }
        else {
            console.log("You choose rock, computer choose scissors.");
            console.log("You win!");
            return "human";
        }
    }
    else if (humanChoice.toLowerCase() == "paper") {
        if (computerChoice == "rock") {
            console.log("You choose paper, computer choose rock.");
            console.log("You win!");
            return "human";
        }
        else if (computerChoice == "paper") {
            console.log("You and computer choose paper.");
            console.log("It's a tie!");
            return "tie";
        }
        else {
            console.log("You choose paper, computer choose scissors.");
            console.log("Computer wins!");
            return "computer";
        }
    }
    else {
        console.log("You either inputted an invalid answer or no answer. Computer wins by default.")
        return "computer";
    }
}

const rockBtn = document.querySelector("#Rockbtn");
const paperBtn = document.querySelector("#Paperbtn");
const scissorsBtn = document.querySelector("#Scissorsbtn");

rockBtn.addEventListener("click", () => handleChoice("rock"));
paperBtn.addEventListener("click", () => handleChoice("paper"));
scissorsBtn.addEventListener("click", () => handleChoice("scissors"));