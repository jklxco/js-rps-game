function computerPlay() {
    return ['Rock', 'Paper', 'Scissors'][Math.floor(Math.random()*3)];
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        return "Draw!"
    } else if (playerSelection == "Rock") {
        return (computerSelection == "Paper") ? "You Lose!" : "You Win!" ;
    } else if (playerSelection == "Paper") {
         return (computerSelection == "Scissors") ? "You Lose!" : "You Win!" ;
    } else if (playerSelection == "Scissors") {
        return (computerSelection == "Rock") ? "You Lose!" : "You Win!" ;
    }
}

let computerSelection = computerPlay();
console.log(computerSelection);

let playerSelection = prompt("Rock, Paper or Scissors?");
console.log(playerSelection);


console.log( playRound(playerSelection, computerSelection) );

