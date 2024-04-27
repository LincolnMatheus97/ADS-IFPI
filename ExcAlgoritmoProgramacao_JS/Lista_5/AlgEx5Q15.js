/*
Leia uma matriz quadrada de ordem N e escreva se ela é ou não simétrica. Uma matriz quadrada é dita 
simétrica se A[i,j] =A[j,i]. 
*/

import { get_number, get_random_number, print } from "../utils/io_utils.js";

function main() {
    const N = get_number(`\nDigite a ordem da sua matriz quadrada: `);
    let matriz = [];
    let matrizTransposta = [];

    for (let i = 0; i < N; i++) {
        let linha = [];

        for (let j = 0; j < N; j++) {
            let valor = Math.floor(get_random_number(1, 3));
            linha.push(valor);

        }
        matriz.push(linha);

    }
    
    for(let m = 0; m < N; m++) {
        let linhasTransposta = [];

        for(let n = 0; n < N; n++) {
            linhasTransposta.push(matriz[n][m]);

        }
        matrizTransposta.push(linhasTransposta);
    }

    let situacao = verificarSimetria(matriz, N);
    let mensagem1 = escreverMatriz(matriz);
    let mensagem2 = escreverMatriz(matrizTransposta);

    print(`
    -------------------------------------------------------------------------
    -> Sua Matriz de ordem ${N}:
    ${mensagem1}

    -> E a transposta da sua Matriz de ordem ${N}:
    ${mensagem2}
    
    -> É podemos dizer que sua matriz:  ${situacao}
    
    -------------------------------------------------------------------------`);

}

function verificarSimetria(matriz, ordem) {
    let simetrico = true;

    for (let m = 0; m < ordem; m++) {
        for (let k = 0; k < ordem; k++) {
            if (matriz[m][k] !== matriz[k][m]) {
                simetrico = false;
                break;

            }
        }
        if (!simetrico) {
            break;

        }

    }
    let situacao = ``;

    if (simetrico) {
        situacao = (`É Simétrica.`);

    } else {
        situacao = (`Não é Simétrica.`);

    }

    return situacao;
}

function escreverMatriz(matriz) {
    let mensagem = ``;

    for (let l = 0; l < matriz.length; l++) {
        mensagem += `\n\t\t${matriz[l].join(` `)}`;

    }

    return mensagem;
}

main();