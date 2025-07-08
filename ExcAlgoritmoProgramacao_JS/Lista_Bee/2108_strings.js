import { question } from "readline-sync";

function main() {
    let lista_palavras = getText().split(' ');
    let quant_caracteres = '';
    let tamanho_maior_palavra = 0;
    let maior_palavra = '';

    while (lista_palavras[0] != "0") {
        for (let i = 0; i < lista_palavras.length; i++) {
            if (lista_palavras[i].length >= tamanho_maior_palavra) {
                tamanho_maior_palavra = lista_palavras[i].length;
                maior_palavra = lista_palavras[i];
            }
            if (i == lista_palavras.length - 1) {
                quant_caracteres += `${lista_palavras[i].length}`;
            } else {
                quant_caracteres += `${lista_palavras[i].length}-`
            }
        }
        console.log(quant_caracteres);
        quant_caracteres = '';

        lista_palavras = getText().split(" ");
    }
    console.log('');
    console.log(`The biggest word: ${maior_palavra}`);
}

function getText() {
    return question();
}

main();