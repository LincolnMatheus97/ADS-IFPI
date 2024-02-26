/*
Leia 3 (três) números, verifique e escreva o maior entre os números lidos.
*/

import { get_number, print } from "../utils/io_utils.js";

function main() {
    //Entrada
    const numb1 = get_number("Digite um primeiro numero: ");
    const numb2 = get_number("Digite um segundo numero: ");
    const numb3 = get_number("Digite um terceiro numero: ");

    //Processamento e Saída
    if (num1_eh_maior(numb1, numb2, numb3)) {
        print (`
        ----------------------------------------------------------------------------
        
            Dado os números digitados, ${numb1}, ${numb2} e ${numb3}.
            Podemos dizer que o maior número é ${numb1}.
            
        ----------------------------------------------------------------------------`);
    } else if (num2_eh_maior(numb1, numb2, numb3)) {
        print (`
        ----------------------------------------------------------------------------
        
            Dado os números digitados, ${numb1}, ${numb2} e ${numb3}.
            Podemos dizer que o maior número é ${numb2}.
            
        ----------------------------------------------------------------------------`);
    } else if (num3_eh_maior(numb1, numb2, numb3)) {
        print (`
        ----------------------------------------------------------------------------
        
            Dado os números digitados, ${numb1}, ${numb2} e ${numb3}.
            Podemos dizer que o maior número é ${numb3}.
            
        ----------------------------------------------------------------------------`);
    } else {
        print (`
        ----------------------------------------------------------------------------
        
            Dado os números digitados, ${numb1}, ${numb2} e ${numb3}.
            Podemos que três números são iguais.
            
        ----------------------------------------------------------------------------`);
    };
}

function num1_eh_maior (numb1, numb2, numb3) {
    return (numb1 > numb2 && numb1 > numb3)
}

function num2_eh_maior (numb1, numb2, numb3) {
    return (numb2 > numb1 && numb2 > numb3)
}

function num3_eh_maior (numb1, numb2, numb3) {
    return (numb3 > numb1 && numb3 > numb2)
}

main();