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

function game() {
    playerWins = 0;
    computerWins = 0;
    drawGames = 0;

    //for (i = 0 ; i < 5 ; i++) {
        let computerSelection = computerPlay();
        let playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
        let result = playRound(playerSelection, computerSelection);
        console.log(result);

        // Increase win/loss/draw counter
        (result.charAt(4) == "W") ? playerWins += 1
        : (result.charAt(4) == "L") ? computerWins += 1 : drawGames += 1;
        
    //}
    console.log("Player Score: " + playerWins + " : Computer Score: " +
            computerWins + " : Draw Games: " + drawGames);
}


const buttons = document.querySelectorAll('button');
const container = document.querySelector('#container');
const resultDiv = document.createElement("div");
    
buttons.forEach( (button) => {
    button.addEventListener( 'click', (e) => {
        resultDiv.textContent  = playRound(e.target.id, computerPlay() );
        container.appendChild(resultDiv);
    });
});


