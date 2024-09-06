const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice() {
    let validatedInput = false;
    while(validatedInput == false) {
        const choice = prompt("Type Rock, Paper, or Scissors.");
        if (choice == null) {
            continue;
        }
        const choiceInLowerCase = choice.toLowerCase();
        if (choices.includes(choiceInLowerCase)) {
            validatedInput = true;
            return choiceInLowerCase;
        }
    }

}

function checkWinner(humanSelection, computerSelection) {
    if (humanSelection == computerSelection) {
        return "Tie";
    }
    else if (
        humanSelection == "rock" && computerSelection == "scissors" ||
        humanSelection == "paper" && computerSelection == "rock" ||
        humanSelection == "scissors" && computerSelection == "paper"
    ) {
        return "Player";
    } else {
        return "Computer";
    }
}

function playRound(humanChoice, computerChoice) {
    const result = checkWinner(humanChoice, computerChoice);
    if (result == "Tie") {
        return "Tie";
    } else if (result == "Player") {
        return `You win! ${humanChoice} beats ${computerChoice}`; 
    } else {
        return `You lose! ${computerChoice} beats ${humanChoice}`;
    }
}

function game() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);

        if (checkWinner(humanSelection, computerSelection) == "Player") {
            humanScore++;
        } else if (checkWinner(humanSelection, computerSelection) == "Computer") {
            computerScore++;
        }
    }
    console.log("Game Over");
    if (humanScore > computerScore) {
        console.log("You win!");
    } else if (humanScore < computerScore) {
        console.log("You lose!");
    } else {
        console("It's a draw");
    }
}