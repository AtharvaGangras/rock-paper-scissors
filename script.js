/*
getComputerChoice - generate random choice between rock paper scissor
getUserChoice- get from user choice using prompt
playRound function - use if statements to get answer and print result
playGame - play five games and return overall winner
use while loop to run this game infinitely and give the user an option to quit

0 - rock
1 - paper 
2 - scissor
*/

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) return "rock";
    else if (choice === 1) return "paper";
    return "scissors";
}
function getUserChoice() {
    let choice;
    while (true) {
        choice = prompt("Enter Your Move:");
        choice = choice.toLowerCase();
        choice = choice.trim();
        if (choice === "rock" || choice === "paper" || choice === "scissors") {
            return choice;
        }
        alert("Invalid Choice.Enter again");
    }

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

function playGame(){
    let wins = 0;
    for(let i = 5;i>0;i--)
    {
        console.log(`${i} rounds remain.`);
        let computerChoice = getComputerChoice();
        let userChoice = getUserChoice();
        let winner = playRound(computerChoice,userChoice);
        if(winner!=="tie") console.log(`${winner} won!`);
        else console.log("It's a tie!");
        if(winner === "user") wins++;
    }
    return wins;
}

while(true)
{
    let wins = playGame();
    alert(`You have won ${wins} times out of 5!`);
    let ans = confirm("play another round?");
    if(ans === false) break;
    console.clear();
}

