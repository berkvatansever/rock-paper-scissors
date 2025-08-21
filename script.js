function getComputerChoice() {
     let random = Math.floor(Math.random() * 3);
      
    if (random == 0) {
        return console.log('rock')
    }
    else if (random == 1) {
        return console.log('paper')
    }

    else return console.log('scissors')

}
let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
    let prompt = window.prompt();
    return prompt;
}
getHumanChoice();
getComputerChoice();
console.log(Math.floor(Math.random()*3));
