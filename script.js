function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) return "rock";
    else if (choice === 1) return "paper";
    return "scissors";
}
function playRound(computerChoice, userChoice) {

    if (computerChoice === userChoice) return "tie";
    else if (computerChoice === "rock" && userChoice === "paper") return "user";
    else if (computerChoice === "rock" && userChoice === "scissors") return "computer";
    else if (computerChoice === "paper" && userChoice === "rock") return "computer";
    else if (computerChoice === "paper" && userChoice === "scissors") return "user";
    else if (computerChoice === "scissors" && userChoice === "rock") return "user";
    else return "computer";
}

const buttons = document.querySelectorAll('button');
const div  = document.querySelector('div');

buttons.forEach((button) => {
    button.addEventListener('click',(e)=>{
        let userChoice = e.target.id;
        let computerChoice = getComputerChoice();
        
        div.textContent =  playRound(computerChoice,userChoice);

    })
})

