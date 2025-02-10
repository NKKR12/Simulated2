// Array of possible choices
const choices = ['rock', 'paper', 'scissors'];

// Function to get a random choice for the computer
function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

// Function to determine the winner
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return `You win! ${playerChoice} beats ${computerChoice}.`;
    } else {
        return `You lose! ${computerChoice} beats ${playerChoice}.`;
    }
}

// Function to handle player input and play the game
function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);

    // Update the result on the webpage
    const resultElement = document.getElementById('result');
    resultElement.textContent = result;
}
