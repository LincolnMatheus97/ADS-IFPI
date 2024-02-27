/*
Leia 2 (dois) números, verifique e escreva o menor e o maior entre os números lidos.
*/

import { get_number, print } from "../../utils/io_utils.js";

function main() {
    //Entrada
    const numb1 = get_number("Digite um primeiro numero: ");
    const numb2 = get_number("Digite um segundo numero: ");

    //Processamento e Saída
    let maior;
    let menor;

    if (num1maiornum2(numb1, numb2) || num2maiornum1(numb1, numb2)) {
        if (num1maiornum2(numb1, numb2)) {
            maior = numb1;
            menor = numb2;

        } else {
            maior = numb2;
            menor = numb1;

        }
        print(`
        -----------------------------------------------------------------------------
        
            O número ${menor} é o menor, e ${maior} por sua vez é o maior.
            
        -----------------------------------------------------------------------------`);
    } else {
        print(`
        -----------------------------------------------------------------------------
            
            O dois números são iguais.
                
        -----------------------------------------------------------------------------`);
    }

}

function num1maiornum2(num1, num2) {
    return num1 > num2
}

function num2maiornum1(num1, num2) {
    return num2 > num1
}

main();