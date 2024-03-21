/*
Escreva um algoritmo para determinar o número de dígitos de um número informado.
*/

import { get_positive_number, print } from "../../utils/io_utils.js";

function main () {
    const numero = get_positive_number(`Digite um numero qualquer: `);
    let divisao = parseInt(numero / 10);
    let digitos = 1;

    while(divisao !== 0) {
        divisao = parseInt(divisao / 10);
        digitos ++;

    }
    print(`O número digitado foi ${numero} e ele possui um total de ${digitos} dígito(s).`);

}

main();