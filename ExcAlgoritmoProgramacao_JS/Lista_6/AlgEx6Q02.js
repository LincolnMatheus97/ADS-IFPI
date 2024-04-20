/*
Leia uma frase e mostre cada palavra da frase em uma linha separada.
*/

import { get_text, print } from "../utils/io_utils.js";

function main() {
    const FRASE = get_text(`\nDigite uma frase qualquer: `);
    let palavrasDaFrase = FRASE.split(` `);
    let listaDePalavras = ``;
    
    for(let i = 0; i < palavrasDaFrase.length; i++) {
        listaDePalavras += `\n${palavrasDaFrase[i]}`;
    }

    print(listaDePalavras);

}

main();