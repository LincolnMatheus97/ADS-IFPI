/*
As normas para a exibição da bibliografia de um artigo cientifico, de uma monografia, de um livro, 
texto etc., exigem que o nome do autor seja escrito no formato último sobrenome, sequência das 
primeiras letras do nome e dos demais sobrenomes, seguidas de ponto final. Por exemplo, Antonio 
Carlos Jobim seria referido por Jobim, A. C.. Escreva um programa que receba um nome completo e o 
escreva no formato de bibliografia. 
*/

import { get_text, print } from "../utils/io_utils.js";

function main() {
    const NOME_COMPLETO = get_text(`\nDigite seu nome completo: `).split(` `);
    let ultimoSobrenome = `${NOME_COMPLETO[NOME_COMPLETO.length - 1]}`;
    let primeiraLetra = verificarLetra(NOME_COMPLETO);
    let seuNome = ``;

    for (let i = 0; i < NOME_COMPLETO.length; i++) {
        if (i + 1 === NOME_COMPLETO.length) {
            seuNome += `${NOME_COMPLETO[i]}`;
            break;
        }

        seuNome += `${NOME_COMPLETO[i]} `;
    }

    print(`\nSeu nome é ${seuNome},\nSeu nome formatado para exibição é ${ultimoSobrenome}, ${primeiraLetra}\n`);

}

function verificarLetra(lista) {
    let letra = ``;

    for (let i = 1; i < lista.length; i++) {
        let primeiraLetra = `${lista[i - 1].split(``)}`;
        let letraP = primeiraLetra[0];
        letra += `${letraP}.`;
    }

    return letra;
}

main();