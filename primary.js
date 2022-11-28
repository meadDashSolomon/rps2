const choices = ['rock', 'paper', 'scissors'];

function game () {
    for (let i = 0; i < 5; i++); {
        playRound ();
    }
}

function playRound () {
    const computerSelection = getComputerChoice();
    const playerSelection = getPlayerChoice();
   // const winner = checkWinner(playerSelection, computerSelection);
    //winners.push(winner);
}

function getComputerChoice () {
    return choices[Math.floor(Math.random()*3)];
}

function getPlayerChoice () {
    let input = prompt("Type rock, paper, or scissors");
    while (input == null) {
        prompt("Type rock, paper, or scissors");
    }
    input = input.toLowerCase;
}

game();

console.log(game);