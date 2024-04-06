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
    return choice;
}
function getUserChoice(){
    let choice = prompt("Enter Your Move:");
    choice = choice.toLowerCase();
    
    switch(choice)
    {
        case "rock":
            choice = 0;
            break;
        case "paper":
            choice = 1;
            break;
        case "scissors":
            choice = 2;
            break;
        default:
            choice = -1;

    }
    return choice;
}