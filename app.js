function computerPlay() {
    // Generate random result of rock, paper, scissors for computer
    let random_result = Math.random();
    if (random_result >= 2/3) {
        return 'rock';
    }
    else if (1/3 <= random_result < 2/3) {
        return 'paper';
    }
    else    
        return 'scissors';
}

function playRound(playerSelection,computerSelection) {
    // Convert playerSelection to lowercase for case-insensitive
    playerSelection = playerSelection.toLowerCase();

    // Find winner of round
    if ((playerSelection === "rock" && computerSelection === "rock") || (playerSelection === "paper" && computerSelection == "paper") || (playerSelection === "scissors" && computerSelection === "scissors")) {
        return "Tie";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Won! Rock beats Scissors";
    }
    else if (playerSelection === "rock" && computerSelection === "paper")   {
        return "You Lose! Paper beats Rock";
    }
    else if (playerSelection === "paper" && computerSelection === "rock")   {
        return "You Won! Paper beats Rock";
    }
    else if (playerSelection === "paper" && computerSelection === "scissors")   {
        return "You Lose! Scissors beats Paper";
    }
    else if (playerSelection === "scissors" && computerSelection === "rock")   {
        return "You Lose! Rock beats Scissors";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper")   {
        return "You Won! Scissors beats Paper";
    }
}

const playerSelection = prompt("Choose 'rock' 'paper' 'scissors'");

const computerSelection = computerPlay();

console.log(playRound(playerSelection,computerSelection));