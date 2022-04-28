const btnRock = document.querySelector('#btnRock');
const btnPaper = document.querySelector('#btnPaper');
const btnScissors = document.querySelector('#btnScissors');
const scoreMessage = document.querySelector('.score-message');
const playerNumber = document.querySelector('#player-number');
const comNumber = document.querySelector('#com-number');
const btnRestart = document.querySelector('#btn-restart');

btnRock.addEventListener('click', playerClick);
btnPaper.addEventListener('click', playerClick);
btnScissors.addEventListener('click', playerClick);
btnRestart.addEventListener('click',() => location.reload());// Reload page)

let playerWin = 0;
let comWin = 0;
let getWinner = false;



function computerPlay() {
    // Generate random result of rock, paper, scissors for computer
    let random_result = Math.floor(Math.random() * 3);
    console.log('computer random numb generated: ' + random_result);
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
    console.log("player pick: " + playerSelection + ",com pick: " +computerSelection);
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
    if (!getWinner) {
        scoreMessage.textContent = playRound(playerSelection,computerPlay());
        updateScore();
        checkWinner();
    }
    else return;
}

function checkWinner() {
    if (playerWin === 5 || comWin === 5) {
        if (playerWin > comWin) {
            scoreMessage.textContent = 'YOU WIN!';
            scoreMessage.classList.add('winner');
        }
        else {
            scoreMessage.textContent = 'YOU LOSE!';
            scoreMessage.classList.add('winner');
        } 
        getWinner = true;
    }
    return;
}

function updateScore() {
    playerNumber.textContent = `${playerWin}`;
    comNumber.textContent = `${comWin}`;
}