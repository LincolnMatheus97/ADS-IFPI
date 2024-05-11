import { question } from "readline-sync";

function main() {
    let [cA, bA, pA] = get_Text().split(` `).map(Number);
    let [cR, bR, pR] = get_Text().split(` `).map(Number);
    let semRefeicao = 0;

    if (cR > cA) {
        semRefeicao += Math.abs(cR - cA);
    }
    if (bR > bA) {
        semRefeicao += Math.abs(bR - bA);
    }
    if (pR > pA) {
        semRefeicao += Math.abs(pR - pA);
    }

    print(semRefeicao);

}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();