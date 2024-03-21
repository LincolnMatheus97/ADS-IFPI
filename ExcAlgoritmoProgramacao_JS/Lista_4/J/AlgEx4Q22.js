/*
Leia 2 números inteiros e escreva o quociente e o resto da divisão dos mesmos, sem que os operadores 
de divisão (/ e %) sejam utilizados. 
*/

import { get_number, print } from "../../utils/io_utils.js";

function main() {
    const numero_1 = get_number(`Digite um primeiro numero: `);
    const numero_2 = get_number(`Digite um segundo numero: `);

    let maior_numero = Math.max(numero_1, numero_2);
    let menor_numero = Math.min(numero_1, numero_2);

    let quociente = 1;
    let resto = maior_numero - menor_numero;

    while (resto > 0) {
        resto = resto - menor_numero;
        quociente++;
    }

    print(`
    Dado os números ${numero_1} e ${numero_2}, temos que o quociente e o resto da divisao entre eles é:
    ---> Quociente: ${quociente} 
    ---> Resto: ${resto}`)
}

main();