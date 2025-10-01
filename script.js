function getComputerChoice() {
     let random = Math.floor(Math.random() * 3);
      
    if (random == 0) {
        return 'rock';
    }
    else if (random == 1) {
        return 'paper';
    }

    else return 'scissors'

}
let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {

    let prompt = window.prompt('Rock, Paper, or Scissors?');
    return prompt.toLowerCase();
}

function playRound(getHumanChoice, getComputerChoice) {
    if (getComputerChoice == 'rock' && getHumanChoice == 'paper'){
        humanScore++
        return 'You win! Paper beats Rock'
    }
    else if (getComputerChoice == 'paper' && getHumanChoice == 'scissors'){
        humanScore++
        return 'You win! Scissors beats Paper'
    }
    else if (getComputerChoice == 'scissors' && getHumanChoice == 'rock'){
        humanScore++
        return 'You win! Rock beats Scissors'
    }
    else if (getComputerChoice == getHumanChoice){
        return 'It\'s a tie!'
    }
    else {
        computerScore++
        return 'You lose! ' + getComputerChoice.charAt(0).toUpperCase() + getComputerChoice.slice(1) + ' beats ' + getHumanChoice
    }
}

    function playGame() {
        for (let i = 0; i < 5; i++) {
            console.log(playRound(getHumanChoice(), getComputerChoice()));
        }
        if (humanScore > computerScore) {
            return 'You are the overall winner! ' + humanScore + ' to ' + computerScore;
        }
        else if (computerScore > humanScore) {
            return 'The computer is the overall winner! ' + computerScore + ' to ' + humanScore;
        }
        else {
            return 'The game is a tie! ' + humanScore + ' to ' + computerScore;
        }
    }


console.log(playGame());
