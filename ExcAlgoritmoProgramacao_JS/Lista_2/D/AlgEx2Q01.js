/*
Leia 3 (três) números, verifique e escreva quantos números iguais existem entre os números.
*/

import { get_number, print } from '../utils/io_utils.js'

function main() {
    // Entrada
    const num1 = get_number("Digite o primeiro numero: ");
    const num2 = get_number("Digite o segundo numero: ");
    const num3 = get_number("Digite o terceiro numero: ");

    // Processamento e Saída
    const igual = numigual(num1, num2, num3);
    if (igual > 0) {
        print(`
        -----------------------------------------------------------------------------------------

            Dados os números ${num1}, ${num2} e ${num3}.
            Existe um total de ${igual} números iguais.
    
        ----------------------------------------------------------------------------------------`);
    } else {
        print(`
        -----------------------------------------------------------------------------------------

            Dados os números ${num1}, ${num2} e ${num3}.
            Nenhum deles são iguais.

        ----------------------------------------------------------------------------------------`);
    }
}

function numigual(num1, num2, num3) {
    let igual = 0;

    if (num1 === num2 || num1 === num3 || num2 === num3) {
        if (num1 === num2) {
            igual++;
        }
        if (num1 === num3) {
            igual++;
        }
        if (num2 === num3) {
            igual++;
        }
        return igual;
    } else {
        return 0;
    }
}

main();