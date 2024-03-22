import { question } from "readline-sync";

function main() {

    while (true) {
        let n_numeros = get_text();
        let numeros = n_numeros.split(` `);
        let X = parseInt(numeros[0]);
        let Y = parseInt(numeros[1]);

        if (X === Y) {
            break;
        }

        if (X > Y) {
            print(`Decrescente`);
        } else {
            print(`Crescente`);
        }
    }
}

function get_text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();