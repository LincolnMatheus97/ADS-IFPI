/*
Leia um vetor A com N elementos, verifique e escreva se existem ou não elementos iguais no vetor. 
*/

import { get_text, print } from "../utils/io_utils.js";

function main() {
    let vetorA = [];

    let elementos = get_text(`\nDigite algo para adicionar na sua lista: `);
    vetorA.push(elementos);
    let opcao = get_text(`\nQuer adicionar mais algo na sua lista ? Se Sim(S) ou Nao(N): `).toUpperCase();

    while (opcao !== `N`) {
        elementos = get_text(`\nDigite um novo elemento para a lista: `);
        vetorA.push(elementos);
        opcao = get_text(`\nQuer adicionar mais algo na sua lista ? Se Sim(S) ou Nao(N): `).toUpperCase();

    }
    let countElementos = 0;

    for (let i = 0; i < vetorA.length; i++) {
        for (let j = i + 1; j < vetorA.length; j++) {
            if(vetorA[i] === vetorA[j]) {
                countElementos++;
            }
        }
    }
    print(`\nExistem um total de ${countElementos} elemento(s) iguais no seu vetor.`);

}

main();