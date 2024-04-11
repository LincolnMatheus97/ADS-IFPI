/*
Calcule e escreva o valor de S.
S = 1/1 + 3/2 + 5/3 + 7/4 + ... + 99/50.
*/

import { print } from "../../utils/io_utils.js";

function main() {
    //Entrada
    //Processamento
    let i = 1;
    let numerador = 1;
    let denominador = 1;
    let somatorio = 0;
    let mensagem;

    somatorio += numerador / denominador;
    mensagem = `O valor de S: `;
    mensagem += `${numerador}/${denominador} `;
    mensagem += `+`;

    for (i = 2; Ate_50(i); i++) {
        numerador += 2;
        denominador = i;

        somatorio += numerador / denominador;
        mensagem += ` ${numerador}/${denominador} `;
        mensagem += `+`;

    }
    mensagem += ` = ${somatorio.toFixed(2)} `;

    //Saída
    print(mensagem);

}

function Ate_50(num) {
    return num <= 50;
}

main();