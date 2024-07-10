import { question } from "readline-sync";

function main() {
    let [H, E, A, O, W, X] = get_Text().split(` `).map(Number);
    let ladoDoBem = H + E + A;
    let ladoDoMal = O + W;

    if (ladoDoBem > ladoDoMal) {
        print(`Middle-earth is safe.`);

    } else {
        ladoDoBem += X;
        if (ladoDoBem >= ladoDoMal) {
            print(`Middle-earth is safe.`);

        } else {
            print(`Sauron has returned.`);

        }

    }

}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();