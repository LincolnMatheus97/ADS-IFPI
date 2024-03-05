/*
Leia N e escreva todos os números inteiros pares de 1 a N.
*/

import { get_positive_number, print } from "../utils/io_utils.js";

function main() {
    //Entrada
    const N = get_positive_number(`
    ---> Digite um numero inteiro qualquer: `);
    //Processamento
    let M = 1;
    for (M; Faca_Ate(M, N); M++) {
        if (Eh_Par(M)) {
            print(`${M}`);
        }
    }
}

function Faca_Ate(M, N) {
    return (M <= N);
}

function Eh_Par(M) {
    return (M % 2 === 0);
}

main();