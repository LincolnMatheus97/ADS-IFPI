/*
Leia uma frase e gere uma nova frase, retirando os espaços entre as palavras.
*/

import { get_text, print } from "../utils/io_utils.js";

function main() {
    const FRASE = get_text(`\nDigite uma frase qualquer: `);
    let palavrasDaLista = FRASE.split(` `);
    let novaFrase = ``;

    for(let i = 0; i < palavrasDaLista.length; i++) {
        novaFrase += `${palavrasDaLista[i]}`;

    }

    print(novaFrase);
}

main();