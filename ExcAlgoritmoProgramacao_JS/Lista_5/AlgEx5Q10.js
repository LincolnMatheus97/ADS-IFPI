/*
Escreva os N primeiros termos da seqüência de Fibonacci (0,1,1,2,3,5,8,13,21,...).
*/

import { get_number, print } from "../utils/io_utils.js";

function main() {
    let vetorFibonacci = [0, 1];
    const N = get_number(`\nDigite quantos numeros voce deseja ver da sequencia de Fibonacci: `);

    let i1 = vetorFibonacci[0];
    let i2 = vetorFibonacci[1];
    let soma;

    for (let i = 0; i < N - 2; i++) {
        soma = i1 + i2;
        i1 = i2;
        i2 = soma;
        vetorFibonacci.push(soma);

    }
    print(`
    --------------------------------------------------------------------------
    
    -> Seus ${N} primeios termos da seqüência de Fibonacci ${vetorFibonacci}.
    
    --------------------------------------------------------------------------`);

}

main();