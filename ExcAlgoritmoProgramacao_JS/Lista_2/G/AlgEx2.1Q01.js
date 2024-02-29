/*
Leia um número e mostre na tela se o número é positivo ou negativo.
*/

import { get_number, print } from "../../utils/io_utils.js";

function main() {
    //Entrada
    const numero = get_number(`Digite um numero qualquer: `);

    //Processamente e Saída
    let mensagem = `${Eh_Positivo(numero) ? `Positivo` : `Negativo`}`

    print(`
        ---> Dado o número ${numero}, ele é ${mensagem}.`);
}

function Eh_Positivo(numero) {
    return numero > 0;
}

main();