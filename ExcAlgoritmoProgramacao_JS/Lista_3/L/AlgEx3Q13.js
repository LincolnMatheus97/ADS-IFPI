/*
Leia N e uma lista de N números e escreva o maior número da lista.
*/

import { get_number, print } from "../../utils/io_utils.js";

function main() {
    //Entrada
    const N = get_number(`
    --->    Digite um numero de elementos da sua lista: `);

    //Processamento
    let i = 1;
    let maior = 0;
    let mensagem;
    let elementos;

    mensagem = (`O Maior Número da Lista: `);

    for (i; Ate_N(i, N); i++) {
        elementos = get_number(`Digite o elemento ${i}: `);

        if (Eh_Maior(maior, elementos)) {
            maior = elementos;
        }

    }
    mensagem += maior;

    //Saída
    print(mensagem);
}

function Ate_N(num1, num2) {
    return num1 <= num2;
}

function Eh_Maior(m, elemento) {
    return elemento > m;
}

main();