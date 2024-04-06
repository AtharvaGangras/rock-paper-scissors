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

function getComputerChoice(){
    let choice = Math.floor(Math.random()*3);
    if(choice === 0) return "rock";
    else if(choice ===1) return "paper";
    return "scissors";
}
function getUserChoice(){
    let choice = prompt("Enter Your Move:");
    choice = choice.toLowerCase();
    choice = choice.trim();
    if(choice ==="rock"||choice==="paper"||choice==="scissors")
    {
        return choice;
    }
    return "Invalid";
    
}

function playRound(computerChoice,userChoice){
    if(userChoice === -1) return -1;

    if(computerChoice === userChoice) return "Tie";
    else if(computerChoice===2 && computerChoice===1)
}
