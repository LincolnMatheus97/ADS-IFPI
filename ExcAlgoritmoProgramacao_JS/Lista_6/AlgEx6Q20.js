/*
Leia uma frase e faça a criptografia, retirando as vogais das palavras.  O programa deverá armazenar 
estas vogais e suas posições originais, mostrar a frase criptografada, em seguida, descriptografar a frase 
e mostrá-la na tela. 
*/

import { get_text, print } from "../utils/io_utils.js";

function main() {
    const FRASE = get_text(`\nDigite uma frase qualquer: `).toUpperCase();
    let fraseAnterior = FRASE.split(` `);
    let fraseCriptografada = ``;
    let vogalCriptografada = ``;

    for (let i = 0; i < fraseAnterior.length; i++) {
        let palavraCriptografada = criptografaPalavra(fraseAnterior[i]);
        vogalCriptografada += palavraCriptografada[0]

        if (i + 1 === fraseAnterior.length) {
            fraseCriptografada += `${palavraCriptografada[1]}`;

        } else {
            fraseCriptografada += `${palavraCriptografada[1]} `;

        }

    }

    let listaFraseCriptografada = fraseCriptografada.split(``);
    let listaVogalCriptografada = vogalCriptografada.split(``);

    let fraseDescriptografada = descriptografaPalavra(listaFraseCriptografada, listaVogalCriptografada);

    print(`
    ------------------------------------------------------------------------------------------------------
    -> Sua Frase era :  ${FRASE}.
    -> Sua Frase Criptografada é :  ${fraseCriptografada}.
    -> Sua Frase Descriptografada é :   ${fraseDescriptografada}.
    -----------------------------------------------------------------------------------------------------`);

}

function criptografaPalavra(palavras) {
    let letras = palavras.split(``);
    let vogalRetirada = ``;
    let novaPalavra = ``;

    for (let i = 0; i < letras.length; i++) {
        if (letras[i] === `A` || letras[i] === `E` || letras[i] === `I` || letras[i] === `O` || letras[i] === `U`) {
            vogalRetirada += `${letras[i]}`
            novaPalavra += `*`;

        } else {
            novaPalavra += `${letras[i]}`;

        }
    }
    return [vogalRetirada, novaPalavra];

}

function descriptografaPalavra(frase, vogal) {
    let palavraDescriptografada = ``;
    let countVogal = 0;

    for (let i = 0; i < frase.length; i++) {
        if (frase[i] === `*`) {
            palavraDescriptografada += `${vogal[countVogal]}`;
            countVogal++;

        } else {
            palavraDescriptografada += `${frase[i]}`;

        }
    }

    return palavraDescriptografada;
}
main();