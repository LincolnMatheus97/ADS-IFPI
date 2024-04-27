/*
Escreva a matriz identidade de ordem N. 
*/

import { get_number, print } from "../utils/io_utils.js";

function main() {
    const N = get_number(`\nDigite a ordem da sua matriz quadrada: `);
    let matriz = [];
    let mensagem = ``;

    for(let i = 0; i < N; i++) {
        let linha = [];

        for(let j = 0; j < N; j++) {
            if(i === j) {
                linha.push(1);

            }else {
                linha.push(0);

            }

        }
        matriz.push(linha);

    }

    for(let m = 0; m < matriz.length; m++) {
        mensagem += `\n\t\t${matriz[m].join(` `)}`;

    }

    print(`
    ----------------------------------------------------------------------------------
    -> A Matriz Identidade de Ordem ${N}
    ${mensagem}
    
    ----------------------------------------------------------------------------------`);
}

main();