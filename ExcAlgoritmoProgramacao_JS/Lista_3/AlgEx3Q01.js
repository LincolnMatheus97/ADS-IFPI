/*
Leia N e escreva todos os números inteiros de 1 a N.
*/

import { get_positive_number, print } from "../utils/io_utils.js";

function main() {
    //Entrada
    const N = get_positive_number(`
    ---->   Digite um numero qualquer: `);
    //Processamento e Saída
    let M = 1;
    for (M; Faca_Ate(N, M); M++) {
        print(`${M}`);
    }
}

function Faca_Ate(N, M) {
    return (M <= N);
}

main();