/*
Leia um vetor A de N elementos e escreva um vetor B de N elementos, conforme a seguinte condição: 
se índice de A[índice] é par então B[índice] = 0, caso contrário B[índice] = 1. 
*/

import { get_text, print } from "../utils/io_utils.js";

function main() {
    let vetorA = [];
    let vetorB = [];

    let elementos = get_text(`\nDigite algo para adicionar no seu vetor: `);
    vetorA.push(elementos);
    let opcao = get_text(`\nQuer adicionar mais algo no seu vetor ? Se Sim(S) ou Nao(N): `).toUpperCase();

    while (opcao !== `N`) {
        elementos = get_text(`\nDigite um novo elemento po seu vetor: `);
        vetorA.push(elementos);
        opcao = get_text(`\nQuer adicionar mais algo no seu vetor ? Se Sim(S) ou Nao(N): `).toUpperCase();

    }

    for (let i = 0; i < vetorA.length; i++) {
        if ((vetorA[i] % 2 === 0)) {
            vetorB.push(`0`);
        } else {
            vetorB.push(`1`);
        }

    }

    print(`
    --------------------------------------------------------------------------------------
    Seu Vetor A é composto por:         [${vetorA}]
    E seu Vetor B é composto por:       [${vetorB}]
    --------------------------------------------------------------------------------------`);

}

main();