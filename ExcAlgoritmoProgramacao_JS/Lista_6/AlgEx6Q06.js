/*
Leia uma frase e gere uma nova frase, substituindo o algarismo que aparecer na frase por seu extenso.
*/

import { get_text, print } from "../utils/io_utils.js";

function main() {
    const FRASE = get_text(`\nDigite uma frase qualquer: `);
    let palavrasDaFrase = FRASE.split(` `);
    let novaFrase = ``;

    for(let i = 0; i < palavrasDaFrase.length; i++) {
        let novaPalavra = verificarPalavras(palavrasDaFrase[i]);
        novaFrase += `${novaPalavra} `;

    }
    print(novaFrase);
}

function verificarPalavras(string) {
    let letrasDaString = string.split(``);
    let novaPalavra = ``;

    for(let i = 0; i < letrasDaString.length; i++) {
        letrasDaString[i] === `1` ? novaPalavra += `um` : letrasDaString[i] === `2` ? novaPalavra += `dois` : letrasDaString[i] === `3` ?
        novaPalavra += `tres` : letrasDaString[i] === `4` ? novaPalavra += `quatro` : letrasDaString[i] === `5` ? novaPalavra += `cinco` :
        letrasDaString[i] === `6` ? novaPalavra += `seis` : letrasDaString[i] === `7` ? novaPalavra += `sete` : letrasDaString[i] === `8` ?
        novaPalavra += `oito` : letrasDaString[i] === `9` ? novaPalavra += `nove` : novaPalavra += letrasDaString[i];

    }
    return novaPalavra;

}

main();