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

const buttons = document.querySelectorAll('button');
const container = document.querySelector('#container');
const resultDiv = document.createElement("div");
const scoreDiv = document.createElement("div");

let playerWins = 0;
let computerWins = 0;
let drawGames = 0;

buttons.forEach( (button) => {
    button.addEventListener( 'click', (e) => {
        
        if (playerWins < 5 && computerWins < 5) {

            let result  = playRound(e.target.id, computerPlay() );
            resultDiv.textContent  = result;
            
            // Increase win/loss/draw counter
            (result.charAt(4) == "W") ? playerWins += 1 :
                    (result.charAt(4) == "L") ? computerWins += 1 : drawGames += 1;
            
            // Output score
            scoreDiv.textContent = ("Player Score: " + playerWins + " - Computer Score: " +
                    computerWins + " - Draw Games: " + drawGames);

            container.appendChild(resultDiv);
            container.appendChild(scoreDiv);
        
        };

        (playerWins === 5) ? alert("You Win!!!") 
            : (computerWins === 5) ? alert("You Lose!!!")
            : pass ;

    });
});
