/*
Leia um vetor com N elementos, ordene-o e escreva-o em ordem crescente. 
*/

import { get_text, print } from "../utils/io_utils.js";

function main() {
    let vetorA = [];
    let vetorPalavras = [];
    let vetor0a9 = [];
    let vetorMaiorQ10 = [];
    let vetorMaiorQ100 = [];

    let elementos = get_text(`\nDigite algo para adicionar no seu vetor A: `);
    vetorA.push(elementos);
    let opcao = get_text(`\nQuer adicionar mais algo no seu vetor ? Se Sim(S) ou Nao(N): `).toUpperCase();

    while (opcao !== `N`) {
        elementos = get_text(`\nDigite um novo elemento para o vetor A: `);
        vetorA.push(elementos);
        opcao = get_text(`\nQuer adicionar mais algo no seu vetor ? Se Sim(S) ou Nao(N): `).toUpperCase();

    }
    
    for (let i = 0; i < vetorA.length; i++) {
        let elemento = vetorA[i];

        if (Number(elemento) < 10) {
            vetor0a9.push(elemento);

        } else if (Number(elemento) >= 10 && Number(elemento) < 100) {
            vetorMaiorQ10.push(elemento);

        } else if (Number(elemento) >= 100) {
            vetorMaiorQ100.push(elemento);

        } else {
            vetorPalavras.push(elemento);

        }

    }
    let vetorOrdenado = [].concat(vetor0a9.sort(), vetorMaiorQ10.sort(), vetorMaiorQ100.sort(), vetorPalavras.sort());

    print(`
    -----------------------------------------------------------------------------------------
    -> Seu vetor A era:                             [${vetorA}]
    -> Seu vetor A ordenado agora:                  [${vetorOrdenado}]
    -----------------------------------------------------------------------------------------`);

}

main();