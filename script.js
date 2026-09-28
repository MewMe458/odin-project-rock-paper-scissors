function humanChoice() {
    humanPrompt = prompt("Rock, Paper or Scissors?")
    if (humanPrompt == null) {
        return "Ok, maybe next time."
    }
    else if (humanPrompt.toLowerCase() == "rock") {
        return "rock";
    }
    else if (humanPrompt.toLowerCase() == "paper") {
        return "paper";
    }
    else if (humanPrompt.toLowerCase() == "scissors") {
        return "scissors";
    }
    else {
        return "";
    }
}

function computerChoice() {
    finalChoice = Math.floor(Math.random() * 3);
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
        }
        else if (computerChoice == "paper") {
            console.log("You choose scissors, computer choose paper.");
            console.log("You win!");
        }
        else {
            console.log("You and computer choose scissors.");
            console.log("It's a tie!");
        }
    }
    else if (humanChoice.toLowerCase() == "rock") {
        if (computerChoice == "rock") {
            console.log("You and computer choose rock.");
            console.log("It's a tie!");
        }
        else if (computerChoice == "paper") {
            console.log("You choose rock, computer choose paper.");
            console.log("Computer wins!");
        }
        else {
            console.log("You choose rock, computer choose scissors.");
            console.log("You win!");
        }
    }
    else if (humanChoice.toLowerCase() == "paper") {
        if (computerChoice == "rock") {
            console.log("You choose paper, computer choose rock.");
            console.log("You win!");
        }
        else if (computerChoice == "paper") {
            console.log("You and computer choose paper.");
            console.log("It's a tie!");
        }
        else {
            console.log("You choose paper, computer choose scissors.");
            console.log("Computer wins!");
        }
    }
    else {
        console.log("You either inputted an invalid answer or no answer. Computer wins by default.")
    }
}

let humanScore = 0;
let computerScore = 0;

let humanSelection = humanChoice();
let computerSelection = computerChoice();
playRound(humanSelection, computerSelection);