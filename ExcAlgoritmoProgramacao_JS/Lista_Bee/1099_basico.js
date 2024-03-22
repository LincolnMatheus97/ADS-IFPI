import { question } from "readline-sync";

function main() {
    const N = get_number();
    let contador = 1;

    while (contador <= N) {
        let n_numeros = get_text();
        let numeros = n_numeros.split(` `);
        let X = parseInt(numeros[0]);
        let Y = parseInt(numeros[1]);

        let somatorio = Calcular_SomatorioImpares(X, Y);

        print(somatorio);

        contador++;
    }
}

function get_number() {
    return parseInt(question());
}

function get_text() {
    return question();
}

function Calcular_SomatorioImpares(num1, num2) {
    let max = Math.max(num1, num2);
    let min = Math.min(num1, num2);
    let soma = 0;

    if (!(max % 2 === 0)) {
        max = max - 1;
    }

    while (max > min) {
        if (!(max % 2 === 0)) {
            soma += max;
        }
        max--;
    }

    return soma;
}

function print(texto) {
    return console.log(texto);
}

main();