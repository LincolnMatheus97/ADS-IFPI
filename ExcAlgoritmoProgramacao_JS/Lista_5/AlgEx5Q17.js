/*
Leia uma matriz quadrada de ordem N e encontre a linha que possui a maior e a menor soma dos 
elementos.
*/

import { get_number, print, get_random_number } from "../utils/io_utils.js ";

function main() {
    const N = get_number(`\nDigite a ordem da sua matriz quadrada: `);
    let matriz = [];
    let mensagem = ``;
    let maiorSoma = 0;
    let menorSoma = Infinity;
    let linhaMaior;
    let linhaMenor;

    for (let i = 0; i < N; i++) {
        let linha = [];

        for (let j = 0; j < N; j++) {
            let valor = Math.floor(get_random_number(1, 10));
            linha.push(valor);
            
        }
        matriz.push(linha);

    }

    for (let i = 0; i < N; i++) {
        let soma = 0;

        for (let j = 0; j < N; j++) {
            soma += matriz[i][j];
        }

        if (soma > maiorSoma) {
            maiorSoma = soma;
            linhaMaior = i + 1;
        }
        if (soma < menorSoma) {
            menorSoma = soma;
            linhaMenor = i + 1;
        }
    }

    for (let m = 0; m < matriz.length; m++) {
        mensagem += `\n\t\t${matriz[m].join(` `)}`;

    }

    print(`
    ----------------------------------------------------------------------------------
    -> Sua Matriz de Ordem ${N}
    ${mensagem}
    
    -> A Maior soma dos elementos da matriz:                ${maiorSoma}.
    -> A linha correspondente é:                            ${linhaMaior}.
    -> A Menor soma dos elementos da matriz:                ${menorSoma}.            
    -> A linha correspondente é:                            ${linhaMenor}.

    ----------------------------------------------------------------------------------`);
}

main();