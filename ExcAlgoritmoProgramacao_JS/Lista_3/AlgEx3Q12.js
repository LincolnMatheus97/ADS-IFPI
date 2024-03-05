/*
Leia N e uma lista de N números e escreva a soma e a média de todos os números da lista.
*/

import { get_number, print } from "../utils/io_utils.js";

function main() {
    //Entrada
    const N = get_number(`
    ---->   Digite o numero de elementos da sua lista: `);

    //Processamento
    let i = 1;
    let soma = 0;
    let media;
    let mensagem;
    let elementos;

    mensagem = (`
            Soma / Média`)

    for (i; Ate_N(i, N); i++) {
        elementos = get_number(`Digite o elemento ${i}: `);
        soma += elementos;

    }
    media = soma / N;
    mensagem += (`
            ${soma} / ${media}`)
    
    //Saída
    print(`${mensagem}`);

}

function Ate_N(num1, num2) {
    return num1 <= num2;
}

main();