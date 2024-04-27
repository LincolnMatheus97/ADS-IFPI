/*
Leia um vetor com N elementos, encontre e escreva o maior e o menor elemento e suas respectivas 
posições no vetor.
*/

import { get_text, print } from "../utils/io_utils.js";

function main() {
    let vetorA = [];

    let elementos = get_text(`\nDigite algo para adicionar no seu vetor A: `);
    vetorA.push(elementos);
    let opcao = get_text(`\nQuer adicionar mais algo no seu vetor ? Se Sim(S) ou Nao(N): `).toUpperCase();

    while (opcao !== `N`) {
        elementos = get_text(`\nDigite um novo elemento para o vetor A: `);
        vetorA.push(elementos);
        opcao = get_text(`\nQuer adicionar mais algo no seu vetor ? Se Sim(S) ou Nao(N): `).toUpperCase();

    }

    let elementoAnterior = 0;
    let menorElemento;
    let maiorElemento;
    let menorElementoAnterior = Infinity;
    let menorIndex;
    let maiorIndex;
    let index = 0;

    for (let i = 0; i < vetorA.length; i++) {
        let elemento = vetorA[i].split(``);

        if (elemento.length > elementoAnterior) {
            maiorElemento = `${elemento.join(``).toUpperCase()}`;
            maiorIndex = index;

        }
        if (elemento.length < menorElementoAnterior) {
            menorElemento = `${elemento.join(``).toUpperCase()}`;
            menorIndex = index;
            menorElementoAnterior = elemento.length;

        }
        elementoAnterior = elemento.length;
        index++

    }

    print(`
    --------------------------------------------------------------------------------------
    
    -> Seu vetor A:                                     [${vetorA}]
    -> Maior Elemento do seu vetor:                     ${maiorElemento}
    -> Posição do maior elemento:                       A[${maiorIndex}]
    -> Menor Elemento do seu vetor:                     ${menorElemento}
    -> Posição do menor elemento:                       A[${menorElemento}]
    
    --------------------------------------------------------------------------------------`);

}

main();