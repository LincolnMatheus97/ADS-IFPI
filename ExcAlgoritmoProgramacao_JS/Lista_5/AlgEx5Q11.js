/*
Leia uma matriz quadrada de ordem N, calcule e escreva sua matriz transposta.
*/

import { get_number, print } from "../utils/io_utils.js";

function main() {
    const N = get_number(`\nDigite a ordem da sua matriz quadrada: `);
    let matriz = [];
    let matrizTransposta = [];
    let count = 1;
    let mensagem1 = ``;
    let mensagem2 = ``;

    for (let i = 1; i <= N; i++) {
        let linha = [];

        for (let j = 1; j <= N; j++) {
            if (count < 10) {
                linha.push(`0` + `${count}`);

            } else {
                linha.push(`${count}`);

            }
            count++;

        }
        matriz.push(linha);

    }

    for (let m = 0; m < matriz.length; m++) {
        mensagem1 += `\n\t\t${matriz[m].join(` `)}`;

    }

    for (let i = 0; i < N; i++) {
        let linhasTranspostas = [];

        for (let j = 0; j < N; j++) {
            linhasTranspostas.push(matriz[j][i]);

        }
        matrizTransposta.push(linhasTranspostas);
    }

    for (let k = 0; k < matrizTransposta.length; k++) {
        mensagem2 += `\n\t\t${matrizTransposta[k].join(` `)}`;

    }

    print(`
    --------------------------------------------------------------------------------------
    -> Sua Matriz:
    ${mensagem1}

    -> Matriz Transposta da sua Matriz:
    ${mensagem2}
    
    -------------------------------------------------------------------------------------`);

}

main();