/*
Leia uma frase e gere uma nova frase, duplicando cada caractere da frase digitada.
*/

import { get_text, print } from "../utils/io_utils.js";

function main() {
    const FRASE = get_text(`\nDigite uma frase qualquer: `);
    let palavrasDaFrase = FRASE.split(` `);
    let novaFrase = ``;

    for(let i = 0; i < palavrasDaFrase.length; i++) {
        novaFrase += `${palavrasDaFrase[i]}${palavrasDaFrase[i]} `;

    }
    print(novaFrase);

}

main();