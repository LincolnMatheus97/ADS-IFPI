/*
Leia 2 números inteiros e escreva a multiplicação dos mesmos, sem que o operador de multiplicação (*) 
seja utilizado. 
*/

import { get_number, print } from "../../utils/io_utils.js";

function main() {
    const numero_1 = get_number(`Digite um primeiro numero: `);
    const numero_2 = get_number(`Digite um segundo numero: `);

    let maior_numero = Math.max(numero_1, numero_2);
    let menor_numero = Math.min(numero_1, numero_2);

    let contador_vezes = 0;
    let contador = 1;

    while (true) {
        contador_vezes += menor_numero;
        if (contador === maior_numero) {
            break;
        }
        contador++;
    }
    print(`O número ${numero_1} vezes o número ${numero_2} = ${contador_vezes}`);
}

main();