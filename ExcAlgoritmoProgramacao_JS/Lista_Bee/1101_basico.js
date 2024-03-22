import { question } from "readline-sync";

function main() {

    while (true) {
        let n_numeros = get_text();
        let numeros = n_numeros.split(` `);
        let M = parseInt(numeros[0]);
        let N = parseInt(numeros[1]);

        if (M <= 0 || N <= 0) {
            break;
        }
        const max = Math.max(M, N);
        const min = Math.min(M, N);
        let somatorio = min;

        let contador = min + 1
        let mensagem = `${min}`;

        while (contador <= max) {
            mensagem += ` ${contador}`;
            somatorio += contador;
            contador++;
        }
        print(`${mensagem} Sum=${somatorio}`);

    }
}

function get_text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();