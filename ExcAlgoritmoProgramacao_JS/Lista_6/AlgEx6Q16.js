/*
Escreva uma sub-rotina de nome diagonal, que escreva um texto de até 20 caracteres na diagonal. Ex.: 
diagonal ('Algoritmos '); escreverá 'Algoritmos' na diagonal.
*/

import { get_text, print } from "../utils/io_utils.js";

function main() {
    const DADOS = get_text(`\nDigite e uma palavra qualquer, (Ex:'Algoritmo'). Sua resposta: `);
    let palavra = DADOS;
    let palavraNaDiagonal = gerarDiagonal(palavra);

    for (let i = 0; i < palavraNaDiagonal.length; i++) {
        print(` `.repeat(i) + palavraNaDiagonal[i].join(` `));

    }

}

function gerarDiagonal(texto) {
    let matriz = [];

    for (let i = 0; i < texto.length; i ++) {
        let linha = [];

        for (let j = 0; j < 20; j ++) {
            linha.push(` `);

        }
        linha.push(texto[i]);
        matriz.push(linha);
    }
    return matriz;
}

main();