let humanScore = 0;
let computerScore = 0;
let tieScore = 0;

let hScore = document.querySelector('.human-score');
let cScore = document.querySelector('.computer-score');
let tScore = document.querySelector('.tie-score');
let result = document.querySelector('.result');
let winner = document.querySelector('.winner');


function getHumanChoice(humanMove) {

    let computerMove = getComputerChoice();
    hoverHumanMove(humanMove);

    let images = document.querySelectorAll('.human-move');
    images.forEach(image => image.style.pointerEvents = 'none');
    setTimeout(function() {
        images.forEach(image => image.style.pointerEvents = 'auto');
    }, 2000); 

    if (humanMove === computerMove) {
        tieScore++;
        tScore.innerHTML = tieScore;
        winner.innerHTML = `It's a Tie!`
        result.innerHTML = `Your Move: ${humanMove}&nbsp;&nbsp;&nbsp;Computer Move: ${computerMove}`;
    }
    else if ((humanMove === 'Scissors' && computerMove === 'Paper') || (humanMove === 'Paper' && computerMove === 'Rock') || (humanMove === 'Rock' && computerMove === 'Scissors')) {
        humanScore++;
        hScore.innerHTML = humanScore;
        winner.innerHTML = `You Win!`
        result.innerHTML = `Your Move: ${humanMove}&nbsp;&nbsp;&nbsp;Computer Move: ${computerMove}`;
    }
    else if ((humanMove === 'Scissors' && computerMove === 'Rock') || (humanMove === 'Rock' && computerMove === 'Paper') || (humanMove === 'Paper' && computerMove === 'Scissors')) {
        computerScore++;
        cScore.innerHTML = computerScore;
        winner.innerHTML = `You Lose!`
        result.innerHTML = `Your Move: ${humanMove}&nbsp;&nbsp;&nbsp;Computer Move: ${computerMove}`;
    }
}

function hoverHumanMove(humanMove) {
    let moveClasses = {
        Rock: '.hum-rock',
        Paper: '.hum-paper',
        Scissors: '.hum-scissors'
    };

    let selectedMove = document.querySelector(moveClasses[humanMove]);
    if (selectedMove) {
        selectedMove.style.backgroundColor = 'rgb(86, 137, 151)';
        setTimeout(function() {
            selectedMove.style.backgroundColor = 'rgb(3, 109, 141)';
        }, 2000);
    }
}

function getComputerChoice() {
    let moves = ['Rock', 'Paper', 'Scissors'];
    let moveClasses = ['.comp-rock', '.comp-paper', '.comp-scissors'];
    
    let randomIndex = Math.floor(Math.random() * 3);
    let selectedMove = document.querySelector(moveClasses[randomIndex]);

    selectedMove.style.backgroundColor = 'rgb(86, 137, 151)';
    setTimeout(function() {
        selectedMove.style.backgroundColor = 'rgb(3, 109, 141)';
    }, 2000);

    return moves[randomIndex];
}