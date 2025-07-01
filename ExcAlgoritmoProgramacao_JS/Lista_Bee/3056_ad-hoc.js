import { question } from "readline-sync";

function main() {
    let passos = getNumber();
    const totalPontos = BigInt((2 ** passos) + 1);
    const pontosUnicos = totalPontos * totalPontos;
    print(pontosUnicos.toString());
}

function getNumber() {
    return parseInt(question());
}

function print(texto) {
    return console.log(texto);
}

main();