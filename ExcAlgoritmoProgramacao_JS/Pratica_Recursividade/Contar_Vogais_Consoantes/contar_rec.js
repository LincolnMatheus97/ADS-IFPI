import { get_text, print } from "../utils/io.js";

function main() {
    let string = get_text(`Digite uma palavra ou frase qualquer:`).split(` `).join(``).split(``);
    let vogais = [`a`, `e`, `i`, `o`, `u`], indice = 0, count = 0;
    let count_Vogais = somatorio_Recursivo(string, vogais, indice, count);
    print(`Total Vogais: ${count_Vogais} e Total Consoantes: ${string.length - count_Vogais}`);

}

function somatorio_Recursivo(string, lista, i, contador) {
    if (string.length === 0) {
        return 0;
    }

    if (i > string.length) {
        return contador;
    }

    if (lista.includes(string[i])) {
        contador++;
        return somatorio_Recursivo(string, lista, i += 1, contador);
    } else {
        return somatorio_Recursivo(string, lista, i += 1, contador);
    }

}

main();