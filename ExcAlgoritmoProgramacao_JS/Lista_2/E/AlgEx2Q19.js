/*
Leia a altura (em metros) e peso (em Kg) de uma pessoa, em seguida calcule o índice de massa corpórea
(IMC = peso / altura2
). Ao final, escreva se a pessoa está com peso normal (IMC abaixo de 25), obeso
(IMC entre 25 e 30) ou obesidade mórbida (IMC acima de 30).
*/

import { print, get_number } from "../../utils/io_utils.js";

function main() {
    //Entrada
    const alt = get_number("Digite sua altuma(em metros): ");
    const peso = get_number("Digite seu peso(em Kilos): ");

    //Processamento e Saída
    let alt2 = alt ** 2;
    let imc = Math.round(peso / alt2);
    let mensagem; 

    if (Eh_MenorIgual_25(imc)) {
        mensagem = `Normal`;

    } else if (Eh_Maior_25_E_Menor_30(imc)) {
        mensagem = `Obeso`;
        
    } else {
        mensagem = `Obesidade Mórbida`;
    
    }
    print(`
        De acordo com o cálculo do IMC, sendo ${imc}. Você está ${mensagem}.`);
}

function Eh_MenorIgual_25(imc) {
    return imc <= 25;
}

function Eh_Maior_25_E_Menor_30(imc) {
    return imc > 25 && imc < 30;
}

main();