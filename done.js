function main(){
    let uChoice = 0;
    let cChoice = 0;
    while (uChoice == cChoice){
        uChoice = userTurn();
        cChoice = CPUTurn();
        if (uChoice == cChoice){
            alert("We've both chosen the same move! We must now DANCE.");
            alert("and by DANCE, I mean go again!");
        }
    }
    findWinner(uChoice, cChoice);
}

function userTurn(move){
    switch (move){
        case 1:
            alert("You've selected rock.");
            return "rock";
        case 2:
            alert("You've selected paper.");
            return "paper";
        case 3:
            alert("You've selected scissors.");
            return "scissors";
        default:
            alert("It's your turn. Please, select a move!");
            break;
    }
}

function CPUTurn(){
    alert("ELLAUR AGAURN.");
}

function findWinner(u, c){
    alert("ANRGY VILLAGER " + u + " NUMBA NIEN, " + c);
}
