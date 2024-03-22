import { question } from "readline-sync";

function main() {

    while (true) {
        let n_numeros = get_text();
        let numeros = n_numeros.split(` `);
        let X = parseInt(numeros[0]);
        let Y = parseInt(numeros[1]);

        if (X === 0 || Y === 0) {
            break;
        }

        let quadrante = (X > 0 && Y > 0) ? `primeiro` : (X < 0 && Y > 0) ? `segundo` : (X < 0 && Y < 0) ? `terceiro` : `quarto`;
        print(quadrante);
    }
}

function get_text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();