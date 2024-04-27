/*
Leia 2 vetores A e B com N elementos, escreva e escreva um vetor C, que represente o conjunto união 
entre os vetores A e B; e um vetor D, que represente o conjunto interseção entre os vetores A e B.
*/

import { print } from "../utils/io_utils.js";

function main() {
    let vetorA = [1, 4, 5, 6, `oi`];
    let vetorB = [2, 5, 6, 9, 10, 12, `oi`];
    let vetorC = [];
    let vetorD = [];

    for (let i = 0; i < vetorA.length; i++) {
        if (!vetorC.includes(vetorA[i])) {
            vetorC.push(vetorA[i]);
        }
    }

    for (let j = 0; j < vetorB.length; j++) {
        if (!vetorC.includes(vetorB[j])) {
            vetorC.push(vetorB[j]);
        }
    }

    for (let k = 0; k < vetorA.length; k++) {
        if (vetorB.includes(vetorA[k])) {
            vetorD.push(vetorA[k]);
        }
    }
    
    print(`
    -------------------------------------------------------------------------
    Temos que o vetor A, possui os elementos:   ${vetorA}.
    Temos que o vetor B, possui os elementos:   ${vetorB}.
    
    A União desses dos vetores A e B, resultam no vetor C:      ${vetorC}.
    E a Interseção dos vetores A e B, resultam no vetor D:      ${vetorD}.
    -------------------------------------------------------------------------`);

}

main();