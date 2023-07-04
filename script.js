let userMove = '';
let computerMove = '';
let result = '';
let score = JSON.parse(localStorage.getItem('score')) || { wins: 0, losses: 0, ties: 0 };

scoreUpdate();
jsResult();

function play(userChoice) {
    userMove = userChoice;
    const random = Math.random();

    if (random >= 0 && random <= 1 / 3) {
        computerMove = "Rock";
    } else if (random > 1 / 3 && random <= 2 / 3) {
        computerMove = "Paper";
    } else {
        computerMove = "Scissor";
    }

    // Determine the result
    if (computerMove === userMove) {
        result = "Tie !";
    } else if (
        (computerMove === "Rock" && userMove === "Scissor") ||
        (computerMove === "Paper" && userMove === "Rock") ||
        (computerMove === "Scissor" && userMove === "Paper")
    ) {
        result = "You lose !";
    } else {
        result = "You win !";
    }

    // Update the score
    if (result === 'You lose !') {
        score.losses++;
    } else if (result === 'You win !') {
        score.wins++;
    } else {
        score.ties++;
    }

    localStorage.setItem('score', JSON.stringify(score));
    scoreUpdate();
    jsResult();
    jsMoves();
}

function scoreUpdate() {
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function reset() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.setItem('score', JSON.stringify(score));
    scoreUpdate();
}

function jsResult() {
    document.querySelector('.js-result').innerHTML = result;
}

function jsMoves() {
    document.querySelector('.js-moves').innerHTML = `You: <img src="css/${userMove}.jpg" class="im">
    Computer: <img src="css/${computerMove}.jpg" class="im">`;
}