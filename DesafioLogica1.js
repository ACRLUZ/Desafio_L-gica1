
//variaveis
let nomeheroi = "Superman"
let XP = 8000
let nivel = ""

if (XP <=1000) {
    nivel = "Ferro"
}

if (XP >=1001 && XP <=2000 ) {
    nivel = "Bronze"
}

if (XP >=2001 && XP <=5000 ) {
    nivel = "Prata"
}

if (XP >=5001 && XP <=7000 ) {
    nivel = "Ouro"
}

if (XP >=7001 && XP <=8000 ) {
    nivel = "Platina"

}

if (XP >=8001 && XP <=9000 ) {
    nivel = "Ascendente"
}

if (XP >=9001 && XP <=10000 ) {
    nivel = "Imortal"
}

if (XP >=10001 ) {
    nivel = "Radiante"
}


//saída
console.log(" O Herói de nome " + nomeheroi + " está no nível de  " + nivel + " . ")