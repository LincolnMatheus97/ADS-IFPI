/*
Um dos recursos disponibilizados pelos editores de texto mais modernos é a contagem da quantidade de 
palavras de um texto. Escreva um programa que determine o numero de palavras de um texto digitado. 
*/

import { get_number, get_text, print } from "../utils/io_utils.js";
import { readFileSync } from 'fs';

function main() {
    let opcao = -1;

    while(opcao !== 0) {
        print(`
        ------------------------------
            MENU
        1 - Escrever um texto
        2 - Ler um arquivo de texto
        0 - Sair
        ______________________________`);
        opcao = get_number(`\tDigite a opcao que desejar: `);

        if(opcao === 1) {
            const TEXTO = get_text(`\n\tDigite seu texto: `).split(` `);
            let quantidadePalavras = TEXTO.length;

            print(`\tO seu texto possui ${quantidadePalavras} palavras no total.`);

        } else if(opcao === 2) {
            const ENDERECO_TXT = get_text(`\n\tDigite o caminho do seu arquivo, (Ex://Documents//texto.txt). Caminho do seu arquivo: `);
            let caminhoArquivo = `\\Users\\linco` + ENDERECO_TXT;
            let textoArquivo = lerAquivoTxt(caminhoArquivo);
            let quantidadePalavras = textoArquivo.length;

            print(`\tO seu arquivo de texto possui ${quantidadePalavras} palavras no total.`);

        }else if(opcao === 0) {
            print(`\n\tEncerrando Programa...`);

        }else {
            print(`\n\tDigite uma opção valida...`);

        }

    }

}

function lerAquivoTxt(caminho) {
    const TEXTO = readFileSync(caminho, `utf-8`).split(` `);
    
    return TEXTO;
}

main();