function computerPlay() {
    return ['rock', 'paper', 'scissors'][Math.floor(Math.random()*3)];
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        return `Draw! You both picked ${playerSelection}`;
    } else if (playerSelection == "rock") {
        return (computerSelection == "paper") ? 
            `You Lose! ${computerSelection} beats ${playerSelection}` :
            `You Win! ${playerSelection} beats ${computerSelection}` ;
    } else if (playerSelection == "paper") {
         return (computerSelection == "scissors") ? 
            `You Lose! ${computerSelection} beats ${playerSelection}` :
            `You Win! ${playerSelection} beats ${computerSelection}` ;
    } else if (playerSelection == "scissors") {
        return (computerSelection == "rock") ? 
            `You Lose! ${computerSelection} beats ${playerSelection}` :
            `You Win! ${playerSelection} beats ${computerSelection}` ;
    }
}

let computerSelection = computerPlay();
let playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();

console.log( playRound(playerSelection, computerSelection) );

