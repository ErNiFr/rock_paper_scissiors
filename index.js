function getComputerChoice() {
    let cars = ["Rock", "Paper", "Scissors"];
    x = Math.floor(Math.random() * 3);
    return cars[x];
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        return `Oavgjort! ${playerSelection} och ${playerSelection} är samma!`;
    }
    
    for (let i = 0; i < 3; i++) {
        if (playerSelection.toLowerCase() == cars[i].toLowerCase()) {
            x = i;
        }
        if (computerSelection.toLowerCase() == cars[i].toLowerCase()) {
            y = i;
        }
    }
    
    
}

console.log();