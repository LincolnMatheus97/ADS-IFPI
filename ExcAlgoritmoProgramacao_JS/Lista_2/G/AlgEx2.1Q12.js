/*
Leia um número e escreva se o número é inteiro ou decimal.
*/

import { get_number, print } from "../../utils/io_utils.js";

function main() {
    //Entrada
    const numero = get_number(`
        ---> Digite um numero, inteiro ou decimal: `);

    //Processamento
    let mensagem;

    if (Eh_Dif_de_Zero(numero)) {
        mensagem = `${Eh_Inteiro(numero) ? `Decimal.` : `Inteiro.`}`;

    } else {
        mensagem = `Inválido. O número ser diferente de zero.`
    }

    //Saída
    print(`
        ---> O número dígitado é ${mensagem}`);
}

function Eh_Dif_de_Zero(numero) {
    return numero !== 0;
}

function Eh_Inteiro(numero) {
    return (numero !== parseInt(numero));
}

main();