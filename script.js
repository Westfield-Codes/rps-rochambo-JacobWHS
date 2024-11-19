const moves = ["r", "p", "s"];
const movesFormatted = ["Rock", "Paper", "Scissors"];
const players = ["You", "I"];
var score = [0, 0];

function main(){
    let rounds = parseInt(setRounds());
    for (let round = 1; round <= rounds; round++){ 
        alert("ROUND " + round);
        let winner = rpsRound();
        score[winner]++;
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
        alert("You did " + movesFormatted[moves.indexOf(uChoice)] + "! So I say, " +  movesFormatted[moves.indexOf(cChoice)] + "!");
        if (uChoice == cChoice) alert("We both did " + movesFormatted[moves.indexOf(uChoice)] + "! Let's try that again.");
    }
    let winner = findWinner(uChoice, cChoice);
    let win = players.indexOf(winner);
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
    //alert(movesFormatted[choice] + "!");
    return moves[choice];
}

function findWinner(u, c){
    //let match = "";
    let wA = [
        ["r", "p", "I"], ["r", "s", "You"],
        ["p", "s", "I"], ["p", "r", "You"],
        ["s", "r", "I"], ["s", "p", "You"]];
    turns = u + c;
    for (let x = 0; x < wA.length; x++){
        match = wA[x][0] + wA[x][1];
        if (match == turns){ 
            winner = wA[x][2];
            return winner;
        }            
    }
}