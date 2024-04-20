/*
Converta um numero do sistema binário, dado como uma cadeia de zeros e uns, para o sistema decimal 
de numeração.
*/

import { get_text, print, reverse } from "../utils/io_utils.js";

function main() {
    const BINARIO = get_text(`\nDigite um numero binario qualquer: `);
    let binarioAoContrario = reverse(BINARIO);
    let numeroDecimal = 0;

    for(let i = 0; i < binarioAoContrario.length; i++) {
        numeroDecimal += binarioAoContrario[i] * (2 ** i);

    }
    print(`Seu número digitado foi ${BINARIO} em decimal fica ${numeroDecimal}`);

}

main();