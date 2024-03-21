/*
Leia dois números X e N. A seguir, escreva o resultado das divisões de X por N onde, após cada 
divisão, X passa a ter como conteúdo o resultado da divisão anterior e N é decrementado de 1 em 1, até 
chegar a 2. 
*/

import { get_number, print } from "../../utils/io_utils.js";

function main() {
    const N = get_number(`Digite um numero N: `);
    const X = get_number(`Digite um numero X: `);

    let novo_x = X;
    let novo_n = N;

    while (novo_n >= 2) {
        let divisao = novo_x / novo_n;
        print(`${divisao.toFixed(2)}`);
        novo_x = divisao;
        novo_n--;
    }
}

main();