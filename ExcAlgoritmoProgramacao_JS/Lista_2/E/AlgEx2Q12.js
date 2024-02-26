/*
Leia 1 (um) número inteiro e escreva se este número é par ou impar.
*/

import { print, get_number } from "../utils/io_utils.js";

function main () {
	//Entrada
	const numb = get_number("Digite um numero inteiro: ");
	
	//Processamento e Saída
	if (par(numb)) {
        print (`
        #### Dado o número digitado ${numb}, ele é par. ####`);
    } else {
        print (`
        #### Dado o número digitado ${numb}, ele é ímpar. ####`);
    }
}

function par(numb) {
    return numb % 2 === 0;
}

main();