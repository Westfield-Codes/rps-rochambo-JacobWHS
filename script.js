const moves = ["r", "p", "s"];

function main(){
    let uChoice = 0;
    let cChoice = 0;
    while (uChoice == cChoice){
        uChoice = userTurn();
        cChoice = cpuTurn();
        if (uChoice == cChoice) alert("Erm, what the sigma? We both did " + uChoice + "??!?1/1//1/");
    }
    findWinner(uChoice, cChoice);
    alert("I chose " + cChoice + ", so " + winner + " won!")
    let again = confirm("Wanna play 'gain?");
    if (again == true) main();
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
    alert(moves[choice] + "!")
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