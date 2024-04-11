/*
Leia um número, calcule e escreva seu fatorial.
*/

import { get_positive_number, print } from "../../utils/io_utils.js";

function main() {
    //Entrada
    const numero = get_positive_number(`Digite um numero: `);

    //Processamento e Saída
    let fatorial = numero;
    let n = 1;

    for (fatorial; Eh_Igual_1(fatorial); fatorial--) {
        n *= fatorial;
    }
    print(`
        -------------------------------------------------------------------------------------
            Dado ${numero}, podemos escrever seu fatorial como:
            ${numero}! = ${numero} * (${numero - 1}) * ... * 1
            _________________________________________________
            ${numero}! = ${n}.
        -------------------------------------------------------------------------------------`);
}

function Eh_Igual_1(numero) {
    return numero >= 1;
}

main();