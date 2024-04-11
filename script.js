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
const body = document.querySelector('body');
const userChoiceUpdate = document.querySelector('#yourchoice')
const computerChoiceUpdate = document.querySelector('#compchoice')

const div = document.querySelector('#currentwinner');

const userWinsUpdate = document.querySelector('#yourWinCount');
const computerWinsUpdate = document.querySelector('#computerWinCount')

let computerWins = 0;
let yourWins = 0;
const appendAns = document.createElement('div');

function buttonClick(e)
{
    let userChoice = e.target.id;
        let computerChoice = getComputerChoice();
        userChoiceUpdate.textContent = userChoice;
        computerChoiceUpdate.textContent = computerChoice;

        let ans = playRound(computerChoice, userChoice)
        div.textContent = ans;

        if (ans === 'computer') ++computerWins;
        else if (ans === 'user') ++yourWins;
        userWinsUpdate.textContent = yourWins;
        computerWinsUpdate.textContent = computerWins;

        if (computerWins === 5) { 
            appendAns.textContent = "The overall winner is Computer!"; 
            body.appendChild(appendAns); 
            setTimeout(playAgain,1);
        }
        else if (yourWins === 5) {
            appendAns.textContent = "The overall winner is You!";
            body.appendChild(appendAns);
            
            setTimeout(playAgain,1);
        }
}

buttons.forEach((button) => {
    button.addEventListener('click', buttonClick)
})
function playAgain(){
    
    let response = confirm("Do You want to play Again?");

    if(response)
    {
        computerWins = 0;
        yourWins = 0;
        userWinsUpdate.textContent = yourWins;
        computerWinsUpdate.textContent = computerWins;
        userChoiceUpdate.textContent = '';
        computerChoiceUpdate.textContent = '';
        div.textContent = '';
        appendAns.textContent = ""; 
        body.appendChild(appendAns); 
    }
    else{
        buttons.forEach((button)=>{
            button.removeEventListener('click',buttonClick);
        })
    }
}


