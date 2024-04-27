/*
Leia uma matriz quadrada de ordem N, calcule e escreva a soma dos números positivos e a soma dos 
números negativos.
*/

import { get_number, get_random_number, print } from "../utils/io_utils.js";

function main() {
    const N = get_number(`\nDigite a ordem da sua matriz quadrada: `);
    let matriz = [];
    let mensagem = ``;
    let somaPositivo = 0;
    let somaNegativo = 0;

    for (let i = 0; i < N; i++) {
        let linha = [];

        for (let j = 0; j < N; j++) {
            let valor = Math.floor(get_random_number(-10, 10));
            linha.push(valor);

        }
        matriz.push(linha);

    }

    for (let i = 0; i < N; i++) {

        for (let j = 0; j < N; j++) {
            if (matriz[i][j] <= 0) {
                somaNegativo += matriz[i][j];

            } else {
                somaPositivo += matriz[i][j];

            }

        }

    }

    for (let m = 0; m < matriz.length; m++) {
        mensagem += `\n\t\t${matriz[m].join(` `)}`;

    }

    print(`
    ----------------------------------------------------------------------------------
    -> Sua Matriz de Ordem ${N}
    ${mensagem}
    
    -> A soma dos elementos positivos da matriz:                    ${somaPositivo}.
    -> A soma dos elementos negativos da matriz:                    ${somaNegativo}.

    ----------------------------------------------------------------------------------`);
}

main();