/*
Leia um número N, some todos os números inteiros entre 1 e N e escreva o resultado obtido.
*/

import { get_number, print } from "../../utils/io_utils.js";

function main() {
    //Entrada
    const N = get_number(`
    ----> Digite um numero: `);

    //Processamento
    let numero = 1;
    let soma = 0;

    for (numero; Ate_N(N, numero); numero++) {
        soma += numero;
    }

    //Saída
    print(`
    ---------------------------------------------------------------------------
        
        Dado o número ${N}, podemos dizer que a soma de 1 até ${N} é: ${soma}
    
    ---------------------------------------------------------------------------`);
}

function Ate_N(N, numero) {
    return numero <= N;
}

main();