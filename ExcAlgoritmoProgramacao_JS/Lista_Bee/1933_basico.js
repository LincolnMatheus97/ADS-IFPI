import { question } from "readline-sync";

function main() {
    let cartas = get_Text().split(` `).map(Number).sort();

    if(cartas[0] >= cartas[1]) {
        print(cartas[0]);
    }
}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();