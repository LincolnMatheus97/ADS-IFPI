import { question } from "readline-sync";

function main() {
    let entradas = getNumber();
    let menorValor = Infinity, gramaMenorValor = 0;

    while (entradas != 0) {
        let [valor, gramas] = getText().split(" ").map(Number);
        let valorGrama = valor / gramas;

        if (valorGrama < menorValor) {
            menorValor = valorGrama;
            gramaMenorValor = gramas;
        }
        entradas--;
    }

    let valorAPagar = (menorValor * 1000);
    print(`${valorAPagar.toFixed(2)}`);
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