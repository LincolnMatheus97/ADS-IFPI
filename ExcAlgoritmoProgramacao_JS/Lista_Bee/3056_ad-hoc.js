import { question } from "readline-sync";

function main() {
    let passos = getNumber();
    const totalPontos = ((2 ** passos) + 1);
    const pontosUnicos = totalPontos * totalPontos;
    print(pontosUnicos);
}

function getNumber() {
    return parseInt(question());
}

function print(texto) {
    return console.log(texto);
}

main();