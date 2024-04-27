/*
Leia uma matriz quadrada de ordem N, determine e escreva o maior e o menor elemento da matriz e 
suas respectivas posições (linha, coluna).
*/

import { get_number, get_random_number, print } from "../utils/io_utils.js";

function main() {
    const N = get_number(`\nDigite a ordem da sua matriz quadrada: `);
    let matriz = [];
    let maiorElemento = 0;
    let menorElemento = Infinity;
    let linhaMenor = 0;
    let colunaMenor = 0;
    let linhaMaior = 0;
    let colunaMaior = 0;
    let mensagem = ``;

    for (let i = 1; i <= N; i++) {
        let linha = [];

        for (let j = 1; j <= N; j++) {
            let valor = Math.floor(get_random_number(1, 100));
            if(valor < 10) {
                linha.push(`0` + valor);
            }else {
                linha.push(valor);
            }

            if(valor > maiorElemento){
                maiorElemento = valor;
                linhaMaior = i ;
                colunaMaior = j;
            }
            if(valor < menorElemento){
                menorElemento = valor;
                linhaMenor = i;
                colunaMenor = j;
            }

        }
        matriz.push(linha);

    }
    
    for (let m = 0; m < matriz.length; m++) {
        mensagem += `\n\t\t${matriz[m].join(` `)}`;

    }

    print(`
    ----------------------------------------------------------------------------------
    -> Sua Matriz de ordem ${N}:
    ${mensagem}
    
    -> O maior elemento é:                              ${maiorElemento}.
    -> A linha e a coluna do maior elemento é:          [${linhaMaior}][${colunaMaior}].
    -> O menor elemento é:                              ${menorElemento}.
    -> A linha e a coluna do menor elemento é:          [${linhaMenor}][${colunaMenor}].

    ----------------------------------------------------------------------------------`);

}

main();