import { question } from "readline-sync";

function main() {
    let qtdPredios = getNumber();
    let andares = getText().split(" ").map(Number);

    let distanciaMax = 0;

    for (let i = 0; i < qtdPredios; i++) {
       for (let j = 0; j < qtdPredios; j++) {
        if (i !== j) {
            let distancia = andares[i] + Math.abs(i - j) + andares[j];

            if (distancia > distanciaMax) {
                distanciaMax = distancia;
            }
        }
       } 
    }

    print(distanciaMax);
}

function getNumber() {
    return parseInt(question());
}

function getText() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();