function computerPlay() {
    // Generate random result of rock, paper, scissors for computer
    let random_result = Math.floor(Math.random() * 3);
    console.log(random_result);
    switch (random_result) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
    }
}

function playRound(playerSelection,computerSelection) {
    // Convert playerSelection to lowercase for case-insensitive
    playerSelection = playerSelection.toLowerCase();

    // Find winner of round
    if (playerSelection === computerSelection) {
        return "You Tie!";
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

function game(round) { 
    // Simulate number of rounds game 
    let win = 0;
    let lose = 0;
    let playerSelection;
    let computerSelection;
    let play_round;
    // Iterate loops for number of rounds
    for (let i = 0; i < round; i++) {
        // Player choose input
        playerSelection = prompt("Choose 'rock' 'paper' 'scissors'");

        // Generate random result for computer
        computerSelection = computerPlay();  

        // Simulate one round of game
        play_round= playRound(playerSelection,computerSelection);
        console.log(play_round);

        // Record score
        if (play_round.includes("Won")) {
            win++;
        }
        else if(play_round.includes("Lose")) {
            lose++;
        }
    }

    // Find winner which won more rounds
    if  (win > lose) {
        console.log("You are winner!");
    }
    else if (win < lose) {
        console.log("Computer is winner!");
    }
    else 
        console.log("No winner!");
}

// Prompt player for input number of rounds
const round = 5;

game(round);

