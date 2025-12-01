//Variables
let level = 15
let winbalance = ""
let wins = 1000
let losses = 10


//Function
function subtract (wins, losses){
    return wins - losses;
}

//Result

let score = subtract (wins, losses)

// Repetition loops

if (score < 10){
    winbalance = "Ferro"
}

if (score >= 11 && score <= 20){
    winbalance = "Bronze"
}

if (score >= 21 && score <= 50){
    winbalance = "Prata"
}

if (score >= 51 && score <= 80){
    winbalance = "Ouro"
}

if (score >= 81 && score <= 90){
    winbalance = "Diamante"
}

if (score >= 91 && score <= 100){
    winbalance = "Lendário"
}

if (score >= 101 ){
    winbalance = "Imortal"
}

//Exit
console.log("O Herói tem saldo de " + winbalance + " está no nível de " + level + ".")