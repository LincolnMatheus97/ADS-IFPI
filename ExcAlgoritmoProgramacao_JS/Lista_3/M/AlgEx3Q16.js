/*
Leia um número N, calcule e escreva os N primeiros termos de seqüência de Fibonacci 
(0,1,1,2,3,5,8,...). O valor lido para N sempre será maior ou igual a 2.
*/

import { get_number, print } from "../../utils/io_utils.js";

function main() {
    //Entrada
    const N = get_number(`Digite um numero (N): `);

    //Processamento e Saída
    let i = 0;
    let i1 = 0;
    let i2 = 1;
    let mensagem;
    let soma;

    mensagem = `A sequencia Fibonacci ate ${N} é: `;
    mensagem += `${i1}, ${i2}, `;

    if (Eh_MaiorIgual_2(N)) {
        for (i; Ate_N(i, N); i++) {
            soma = i1 + i2;
            i1 = i2;
            i2 = soma;
            mensagem += `${soma}, `;
        }
        print(mensagem);
    } else {
        print(`Dígite um número (N) maior ou igual a 2.`);
    }
}

function Eh_MaiorIgual_2(num) {
    return num >= 2;
}

function Ate_N(num1, num2) {
    return num1 <= num2;
}

main();