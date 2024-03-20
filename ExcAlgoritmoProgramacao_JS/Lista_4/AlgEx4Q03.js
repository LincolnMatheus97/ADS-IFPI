/*
Leia 2 (dois) números, calcule e escreva o mdc (máximo divisor comum) entre os números lidos.
*/

import { get_positive_number, print } from "../utils/io_utils.js";

function main() {
    print(`>>>>>>>>>>>      CALCULADORA DE MDC          >>>>>>>>>>>`);

    const numero_1 = get_positive_number(`Digite um primeiro numero: `);
    const numero_2 = get_positive_number(`Digite um segundo numero: `);

    let minimo = Math.min(numero_1, numero_2);
    let mensagem = 0;

    while (true) {
        if (numero_1 % minimo === 0 && numero_2 % minimo === 0) {
            mensagem = minimo;
            break;
        }
        minimo--;
    }

    print(`O MDC de ${numero_1} e ${numero_2} é ${mensagem}.`);
}

main();