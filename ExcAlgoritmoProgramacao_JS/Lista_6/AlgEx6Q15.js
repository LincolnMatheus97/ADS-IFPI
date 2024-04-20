/*
Escreva uma sub-rotina de nome vertical, que escreva um texto de até 20 caracteres na vertical. Ex.: 
vertical (10,'Algoritmos'); escreverá 'Algoritmos' na coluna 10.
*/

import { get_text, print } from "../utils/io_utils.js";

function main() {
    const DADOS = get_text(`\nDigite a coluna e uma palavra qualquer, (Ex: 10, 'Algoritmo'). Sua resposta: `).split(`,`);
    let coluna = Number(DADOS[0]);
    let palavra = DADOS[1];
    let palavraNaVertical = gerarVertical(coluna, palavra);

    for (let i = 0; i < palavraNaVertical.length; i++) {
        print(palavraNaVertical[i].join(` `));

    }

}

function gerarVertical(coluna, texto) {
    let matriz = [];

    for (let i = 0; i < texto.length; i ++) {
        let linha = [];

        for (let j = 0; j < coluna; j ++) {
            linha.push(` `);

        }
        linha.push(texto[i]);
        matriz.push(linha);
    }
    return matriz;
}

main();