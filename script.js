const moves = ["r", "p", "s"];
const movesFormatted = ["Rock", "Paper", "Scissors"];
const players = ["You", "I"];
var score = [0, 0];

function main(){
    let rounds = parseInt(setRounds());
    let round = parseInt(0);
    while (round <= rounds){ 
        if (!round <= rounds){
            alert("no");
        }
        round++;
        alert("Round: " + round + " Rounds: " + rounds)
        if (round == 1) alert("ROUND ONE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        let winner = rpsRound();
        score[winner]++;
        alert(winner);
    }
    alert("It's " + score[0] + " to " + score[1] + "!");
    if (score[0] > score[1]) alert("You win!");
    else alert("You lose...")
    let again = confirm("Could I interest you in playing again?");
    if (again == true) main();
}

function setRounds(){
    let r = parseInt(prompt("How many rounds of rock paper scissors would you like to play?"))
    if (r % 2 == 0 || isNaN(r)){
        alert("Your response must be an even number!");
        return setRounds();
    }
    return r;
}

function rpsRound(){
    let uChoice = 0;
    let cChoice = 0;
    while (uChoice == cChoice){
        uChoice = userTurn();
        cChoice = cpuTurn();
        if (uChoice == cChoice) alert("Erm, what the sigma? We both did " + uChoice + "??!?1/1//1/");
    }
    let winner = findWinner(uChoice, cChoice);
    let win = players.indexOf(winner);
    // alert("uChoice: " + uChoice);
    // alert("cChoice: " + cChoice);
    // alert("Winner: " + winner);
    // alert("Win: " + win);
    return win;
}

function userTurn(){
    let choice = prompt("Enter r, p or s");
    if (!moves.includes(choice)){
        alert("Invalid input, please select r p or s.")
        return userTurn();
    }
    else return choice;
}

function cpuTurn(){
    let choice = Math.floor(Math.random()*3);
    alert(movesFormatted[choice] + "!")
    return moves[choice];
}

function findWinner(u, c){
    //let match = "";
    let wA = [
        ["r", "p", "I"], ["r", "s", "you"],
        ["p", "s", "I"], ["p", "r", "you"],
        ["s", "r", "I"], ["s", "p", "you"]];
    turns = u + c;
    for (let x = 0; x < wA.length; x++){
        match = wA[x][0] + wA[x][1];
        if (match == turns){ 
            winner = wA[x][2];
            return winner;
        }            
    }
}