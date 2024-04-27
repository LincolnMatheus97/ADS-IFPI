/*
Leia uma matriz quadrada de ordem N, calcule e escreva seu determinante.
*/

import { get_number, get_random_number, print } from "../utils/io_utils.js";

function main() {
    const N = get_number(`\nDetermine a ordem da sua matriz quadrada: `);
    let matriz = [];
    let determinante = 0;

    for (let i = 0; i < N; i++) {
        let linha = [];

        for (let j = 0; j < N; j++) {
            let valor = Math.floor(get_random_number(1, 10));
            linha.push(valor);

        }
        matriz.push(linha);

    }

    determinante = verificarDeterminante(matriz, N);

    let mensagem = ``;
    for (let m = 0; m < matriz.length; m++) {
        mensagem += `\n\t${matriz[m].join(` `)}`
    }

    print(`
    -----------------------------------------------------------------------
    -> A Matriz de ordem ${N}:
    ${mensagem}
    
    -> E o determinante dessa matriz é igual:   ${determinante}.
    
    ----------------------------------------------------------------------`);
}

function verificarDeterminante(matriz, ordem) {
    let det = 0;

    if (ordem === 1) {
        det = matriz[0][0];

    } else if (ordem === 2) {
        det = matriz[0][0] * matriz[0][1] - matriz[1][0] * matriz[1][1];

    } else {
        for (let m = 0; m < ordem; m++) {
            det += matriz[0][m] * cofator(matriz, ordem, m);

        }

    }

    return det
}

function cofator(matriz, N, linha, coluna) {
    let subMatriz = [];
    let m = 0;

    for (let i = 0; i < N; i++) {
        if (i !== linha) {
            subMatriz[m] = [];

            for (let j = 0; j < N; j++) {
                if (j !== coluna) {
                    subMatriz[m].push(matriz[i][j]);
                }
            }
            m++;
        }
    }

    if (subMatriz.length === 0) {
        return 0; // Se a submatriz for vazia, o cofator é zero
    }

    const sinal = (linha + coluna) % 2 === 0 ? 1 : -1;
    const cof = verificarDeterminante(subMatriz, N - 1);

    return sinal * cof;
}

main();