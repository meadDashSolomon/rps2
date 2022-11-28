const choices = ['rock', 'paper', 'scissors'];

function game () {
    for (let i = 0; i < 5; i++); {
        playRound ();
    }
}

function playRound () {
    const computerChoice = getComputerChoice();
    const playerChoice = getPlayerChoice();
}

function getComputerChoice () {
    return choices[Math.floor(Math.random()*3)];
}

game();