/*
Leia N, calcule e escreva o valor de S.
S = 1/1 - 1/2 + 1/3 - ... +/- 1/N;
*/

import { get_number, print } from "../utils/io_utils.js";

function main() {
    //Entrada
    const N = get_number(`Digite um numero (N): `);

    //Processamento
    let i = 1;
    let numerador = 1;
    let denominador;
    let somatorio = 0;
    let mensagem;

    mensagem = `O Valor de S: `;

    for(i; Ate_N(i, N); i++) {
        denominador = i;

        if(i_Eh_Impar(i)) {
            somatorio += numerador/denominador;
            mensagem += ` ${numerador}/${denominador} `;
            mensagem += `-`;
        }else {
            somatorio -= numerador/denominador;
            mensagem += ` ${numerador}/${denominador} `;
            mensagem += `+`;
        }
    }
    mensagem += ` = ${somatorio.toFixed(2)}`;

    //Saída
    print(mensagem);
}

function Ate_N(num1, num2) {
    return num1 <= num2;
}

function i_Eh_Impar(i) {
    return (i % 2 !==0);
}

main();