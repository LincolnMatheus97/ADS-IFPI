import { question } from "readline-sync";

function main() {
    const N = get_number();
    let contador = 1;

    while (contador <= N) {
        let n_numeros = get_text();
        let numeros = n_numeros.split(` `);
        let X = parseInt(numeros[0]);
        let Y = parseInt(numeros[1]);

        let resultado = X / Y;

        if (Y === 0) {
            print(`divisao impossivel`);
        } else {
            print(`${resultado.toFixed(1)}`);
        }
        contador++;
    }
}

function get_number() {
    return parseInt(question());
}

function get_text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();