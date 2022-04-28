const btnRock = document.querySelector('#btnRock');
const btnPaper = document.querySelector('#btnPaper');
const btnScissors = document.querySelector('#btnScissors');
const scoreMessage = document.querySelector('.score-message');
const playerNumber = document.querySelector('#player-number');
const comNumber = document.querySelector('#com-number');

btnRock.addEventListener('click', playerClick);
btnPaper.addEventListener('click', playerClick);
btnScissors.addEventListener('click', playerClick);

let playerWin = 0;
let comWin = 0;
let round = 5;


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
    console.log(playerSelection + ' ' +computerSelection);
    // Find winner of round
    if (playerSelection === computerSelection) {
        return "You Tie!";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerWin++;
        return "You Won! Rock beats Scissors";
    }
    else if (playerSelection === "rock" && computerSelection === "paper")   {
        comWin++;
        return "You Lose! Paper beats Rock";
    }
    else if (playerSelection === "paper" && computerSelection === "rock")   {
        playerWin++;
        return "You Won! Paper beats Rock";
    }
    else if (playerSelection === "paper" && computerSelection === "scissors")   {
        comWin++;
        return "You Lose! Scissors beats Paper";
    }
    else if (playerSelection === "scissors" && computerSelection === "rock")   {
        comWin++;
        return "You Lose! Rock beats Scissors";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper")   {
        playerWin++;
        return "You Won! Scissors beats Paper";
    }
}


function playerClick(e) {
    // Get attribute id-player-pick value from clicked image
    const playerSelection = e.target.attributes[0].value;
    if (round > 0) {
        round--;
        scoreMessage.textContent = playRound(playerSelection,computerPlay());
        updateScore();
        checkWinner();
    }
    else return;
}

function checkWinner() {
    if (round === 0) {
        if (playerWin > comWin) {
            scoreMessage.textContent = 'YOU WIN!';
            scoreMessage.classList.add('winner');
            return;
        }
        else if (comWin > playerWin) {
            scoreMessage.textContent = 'YOU LOSE!';
            scoreMessage.classList.add('winner');
            return;
        } 
        else {
            scoreMessage.textContent= 'GAME TIE!';
            scoreMessage.classList.add('winner');
            return;
        }
    }
    else return;
}

function updateScore() {
    playerNumber.textContent = `${playerWin}`;
    comNumber.textContent = `${comWin}`;
}