/*
Uma palavra é palíndroma se ela não se altera quando lida da direita para esquerda. Por exemplo, raiar 
é palíndroma. Escreva um programa que verifique se uma palavra digitada é palíndroma. 
*/

import { get_text, print } from "../utils/io_utils.js";

function main() {
    const PALAVRA = get_text(`\nDigite uma palavra qualquer: `).toUpperCase();
    let palavraReversa = PALAVRA.split(``).reverse();
    let palindroma = ``;

    for (let i = 0; i < palavraReversa.length; i++) {
        palindroma += `${palavraReversa[i]}`;

    }

    if (palindroma === PALAVRA) {
        print(`A palavra digitada é Palíndroma, ou seja não se altera quando lida da direita para esquerda.\n`);

    } else {
        print(`A palavra digitada não é Palíndroma.`);

    }

}

main();