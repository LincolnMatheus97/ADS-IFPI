/*
Leia N, calcule e escreva o valor de S.
S = 1/N - N-1/2 + 3/N-2 +- ... +- N/1.
*/

import { get_number, print } from "../../utils/io_utils.js";

function main() {
    //Entrada
    const N = get_number(`Digite um numero(N): `);

    //Processamento
    let i = 1;
    let numerador;
    let denominador;
    let somatorio = 0;
    let mensagem;

    mensagem = `O valor de S: `;

    for (i; Ate_N(i, N); i++) {
        numerador = i;
        denominador = N - i + 1;

        if (i_Eh_Impar(i)) {
            somatorio += numerador / denominador;
            mensagem += ` ${numerador}/${denominador} `;
            mensagem += `-`;
        } else {
            somatorio -= numerador / denominador;
            if (i_Eh_Dif_N(i, N)) {
                mensagem += ` ${denominador}/${numerador} `;
                mensagem += `+`;
            } else {
                mensagem += ` ${numerador}/${denominador} `;
            }
        }

    }
    mensagem += ` = ${somatorio.toFixed(2)}`

    //Saída
    print(mensagem);
}

function Ate_N(num1, num2) {
    return num1 <= num2
}

function i_Eh_Impar(n) {
    return n % 2 !== 0;
}

function i_Eh_Dif_N(num1, num2) {
    return num1 !== num2;
}

main();