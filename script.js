function computerChoice() {
    finalChoice = Math.floor(Math.random() * 3);
    if (finalChoice == 0) {
        return "Rock";
    }
    else if (finalChoice == 1) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

console.log(computerChoice());