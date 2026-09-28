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

function playGame() {
    const rounds = 5;

    let humanScore = 0;
    let computerScore = 0;

    console.log("Your score: " + humanScore);
    console.log("Computer score: " + computerScore);

    let i = 0;
    while (i < rounds) {
        let humanSelection = humanChoice();
        let computerSelection = computerChoice();
        let winner = playRound(humanSelection, computerSelection);
        if (winner == "human") {
            humanScore ++;
        }
        else if (winner == "computer") {
            computerScore ++;
        }
        console.log("Your score: " + humanScore);
        console.log("Computer score: " + computerScore);

        i ++;
    }

    console.log("===FINAL SCORE===");
    console.log("Your Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
    console.log("=================");
    if (humanScore > computerScore) {
        console.log("Wow! You win the game!");
    }
    else if (humanScore < computerScore) {
        console.log("Bummer! Computer win the game!");
    }
    else {
        console.log("Unbelievable! It's a tie for this game!");
    }
}

playGame();