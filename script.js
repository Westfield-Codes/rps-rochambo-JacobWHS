function main(){
    let uChoice = 0;
    let cChoice = 0;
    while (uChoice == cChoice){
        uChoice = userTurn();
        cChoice = cpuTurn();
        if (uChoice == cChoice) alert("Erm, what the sigma? We both did " + uChoice + "??!?1/1//1/");
    }
    findWinner(uChoice, cChoice);
    let again = confirm("Wanna play 'gain?");
    if (again == true) main();
}

function userTurn(){
    let choice = prompt("Enter r, p or s");
    if (choice != "r" && choice != "p" && choice != "s"){
        alert("Invalid input, please select r p or s.")
        return userTurn();
    }
    else return choice;
}

function cpuTurn(){
    let choice = Math.floor(Math.random()*2);
    if (choice == 0) return "r";
    else if (choice == 1) return "p";
    else return "s";
}

function findWinner(u, c){
    if (u == "r"){
        if (c == "s") winner = "you";
        else winner = "I";
    }
    else if (u == "s"){
        if (c == "p") winner = "you";
        else winner = "I";
    }
    else {
        if (c == "r") winner = "you";
        else winner = "I";
    }
    alert("You chose " + u + " while I chose " + c + ", " + winner + " won!")
}