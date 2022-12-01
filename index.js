function getComputerChoice() {
    let cars = ["Rock", "Paper", "Scissors"];
    x = Math.floor(Math.random() * 3);
    return cars[x];
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        return `Draw! ${computerSelection} and ${computerSelection} are the same!`;
    }
    
    for (let i = 0; i < 3; i++) {
        if (playerSelection.toLowerCase() == cars[i].toLowerCase()) {
            x = i;
        }
        if (computerSelection.toLowerCase() == cars[i].toLowerCase()) {
            y = i;
        }
    }
    if ((x == 0 && y == 1) || (x == 1 && y == 2) || (x == 3 && y == 0)){ 
        return `You lost! ${computerSelection} beats ${playerSelection}!`;
    } else {
        return `You won! ${playerSelection} beats ${computerSelection}!`;
    }
}

console.log(playRound(playerSelection, getComputerChoice()));