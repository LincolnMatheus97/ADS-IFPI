/*
Leia um vetor A com N elementos e escreva um vetor B, com os mesmos elementos de A, sendo que 
estes deverão estar invertidos, ou seja, o 1º elemento de A deve ser o último elemento de B; o 2º 
elemento de A deve ser o penúltimo elemento de B e assim por diante.
*/

import { get_text, print} from "../utils/io_utils.js";

function main() {
    let vetorA = [];
    let vetorB = [];

    let elementos = get_text(`\nDigite algo para adicionar na sua lista: `);
    vetorA.push(elementos);
    let opcao = get_text(`\nQuer adicionar mais algo na sua lista ? Se Sim(S) ou Nao(N): `).toUpperCase();

    while (opcao !== `N`) {
        elementos = get_text(`\nDigite um novo elemento para a lista: `);
        vetorA.push(elementos);
        opcao = get_text(`\nQuer adicionar mais algo na sua lista ? Se Sim(S) ou Nao(N): `).toUpperCase();

    }

    vetorB = vetorA;

    print(`\nSua lista é composta [${vetorA}] e o reverso dela é [${vetorB.reverse()}].`);

}

main();