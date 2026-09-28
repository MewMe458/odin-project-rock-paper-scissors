function humanChoice() {
    humanPrompt = prompt("Rock, Paper or Scissors?")
    if (humanPrompt == null) {
        return "Ok, maybe next time."
    }
    else if (humanPrompt.toLowerCase() == "rock") {
        return "You choose Rock";
    }
    else if (humanPrompt.toLowerCase() == "paper") {
        return "You choose Paper";
    }
    else if (humanPrompt.toLowerCase() == "scissors") {
        return "You choose Scissors";
    }
    else {
        return "Invalid answer";
    }
}

function computerChoice() {
    finalChoice = Math.floor(Math.random() * 3);
    if (finalChoice == 0) {
        return "Computer chooses Rock";
    }
    else if (finalChoice == 1) {
        return "Computer chooses Paper";
    }
    else {
        return "Computer chooses Scissors";
    }
}

let humanScore = 0;
let computerScore = 0;
console.log(humanChoice());
console.log(computerChoice());