/*
Faça a criptografia de uma frase digitada pelo usuário. Na criptografia, a frase deverá ser invertida e as 
consoantes deverão ser substituídas pelo caractere #.
*/

import { get_text, print, reverse } from "../utils/io_utils.js";

function main() {
    let palavra = get_text(`Digite uma palavra: `).toUpperCase();
    let novaPalavraInvertida = inverterPalavra(palavra);
    let escolha = get_text(`Sua Palavra criptograda e ${novaPalavraInvertida}, \nvoce deseja criptografar uma nova palavra, Sim(S) ou Nao(N): `).toUpperCase();

    while (escolha === `S`) {
        palavra = get_text(`Digite uma nova palavra: `).toUpperCase();
        novaPalavraInvertida = inverterPalavra(palavra);

        escolha = get_text(`Sua Palavra criptograda ${novaPalavraInvertida}, \nvoce deseja criptografar uma nova palavra, Sim(S) ou Nao(N): `).toUpperCase();
    }

}

function inverterPalavra(palavra) {
    let novaPalavra = ``;

    for (let i = 0; i < palavra.length; i++) {
        let caractere = verificarCaractere(palavra[i]);
        novaPalavra += caractere;

    }

    return reverse(novaPalavra);
}

function verificarCaractere(caracter) {
    let novoCaracter = ``;

    if (caracter === `A` || caracter === `E` || caracter === `I` || caracter === `O` || caracter === `U`) {
        novoCaracter = caracter;
    } else if (caracter === `0` || caracter === `1` || caracter === `2` || caracter === `3` || caracter === `4` ||
        caracter === `5` || caracter === `6` || caracter === `7` || caracter === `8` || caracter === `9`) {
        novoCaracter = caracter;
    } else {
        novoCaracter = `#`;
    }

    return novoCaracter;
}

main();