/*
Leia N, calcule e escreva o valor de S,
S = 1/N + 2/N-1 + 3/N-2 + ... + N/1;
*/

import { get_number, print } from "../../utils/io_utils.js";

function main() {
    //Entrada
    const N = get_number(`Digite um numero (N): `);

    //Processamento
    let i = 1;
    let numerador;
    let denominador = N;
    let somatorio = 0;
    let mensagem;

    mensagem = `O valor de S: `;

    for (i ; Ate_N(i, N); i++) {
        numerador = i;
        denominador = N - i + 1;
        somatorio += numerador/denominador;
        mensagem += ` ${numerador}/${denominador} `;
        mensagem += `+`;
    }
    mensagem += ` = ${somatorio.toFixed(2)}`;

    //Saída
    print(mensagem);
}

function Ate_N(num1, num2) {
    return num1 <= num2;
}

main();