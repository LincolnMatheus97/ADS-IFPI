/*
Leia 2 vetores A e B com N vetorA[i]s, escreva um vetor C, sendo este a junção dos vetores A e B.  
Desta forma, o vetor C deverá ter 2*N elementos. 
*/

import { print } from "../utils/io_utils.js";

function main() {
    let vetorA = [1, 4, 5, 6, `oi`];
    let vetorB = [2, 5, 6, 9, 10, 12, `oi`];
    let vetorC = [];

    for (let i = 0; i < vetorA.length; i++) {
        if(!vetorC.includes(vetorA[i])) {
            vetorC.push(vetorA[i]);
        }
    }

    for (let j = 0; j < vetorB.length; j++) {
        if(!vetorC.includes(vetorB[j])) {
            vetorC.push(vetorB[j])
        }
    }

    print(`
    -------------------------------------------------------------------------
    Temos que o vetor A, possui os elementos:   ${vetorA}.
    Temos que o vetor B, possui os elementos:   ${vetorB}.
    
    A Junção desses dos vetores A e B, resultam no vetor C:      ${vetorC}.
    -------------------------------------------------------------------------`);

}

main();