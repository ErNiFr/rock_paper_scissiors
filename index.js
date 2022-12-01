
let cars = ["Rock", "Paper", "Scissors"];
let x;
let y;
let playerScore = 0;
let ComputerScore = 0;

function getComputerChoice() {
    x = Math.floor(Math.random() * 3);
    return cars[x];
}

const playerSelection = "rock";

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        console.log("It's a Draw")
    } 
    else {
        for (let i = 0; i < 3; i++) {
            if (playerSelection.toLowerCase() == cars[i].toLowerCase()) {
                x = i;
            }
            if (computerSelection.toLowerCase() == cars[i].toLowerCase()) {
                y = i;
            }
        }
        if ((x == 0 && y == 1) || (x == 1 && y == 2) || (x == 3 && y == 0)){ 
            console.log("Computer won")
            ComputerScore++;
        } else {
            console.log("You won")
            playerScore++;
        }
    }
    console.log(`${playerScore} - ${ComputerScore}`)
    console.log(" ")
}
function game() {
    for (let a = 0; a < 5; a++) {
        playRound(playerSelection, getComputerChoice());
    }
    if (playerScore > ComputerScore) {
        return `You won! ${playerScore} - ${ComputerScore}`;
    } else if (playerScore < ComputerScore) {
        return `You lost! ${playerScore} - ${ComputerScore}`;
    } else {
        return `Draw! ${playerScore} - ${ComputerScore}`;
    }
}
console.log(game())