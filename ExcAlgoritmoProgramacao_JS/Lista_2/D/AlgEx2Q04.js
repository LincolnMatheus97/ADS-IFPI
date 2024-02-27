/*
Leia 1 (um) número de 2 (dois) dígitos, verifique e escreva se o algarismo da dezena é igual ou diferente
do algarismo da unidade.
*/

import { print, get_number } from "../../utils/io_utils.js";

function main() {
    //Entrada
    const numb = get_number(`
            Digite 1(um) numero de 2(dois) digitos: `);

    //Processamento e Saída
    let mensagem;

    if (numero_tem_2digitos(numb)) {
        dezena = Math.floor(numb / 10);
        unidade = numb % 10;

        if (dezenaigualunidade(dezena, unidade)) {
            mensagem = `igual`;

        } else {
            mensagem = `diferente`;

        }
        print(`
            _____________________________________________________________________________________________________
    
            Dado o número ${numb}, podemos dizer que o algarismo da dezena é ${dezena} e da unidade ${unidade}. 
            Concluímos que são ${mensagem}.
        
            ______________________________________________________________________________________________________`);
    } else {
        print(`
            _____________________________________________________________________________________________________
    
            Dado o número ${numb}, ele é uma entrada inválida. Digite um número de dois dígitos.
        
            ______________________________________________________________________________________________________`);
    }
}

function numero_tem_2digitos(numb) {
    return (numb >= 10 && numb <= 99);
}

function dezenaigualunidade(dezena, unidade) {
    return dezena === unidade;
}

main();