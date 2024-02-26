/*
Leia 2 (dois) números, verifique e escreva o menor e o maior entre os números lidos.
*/

import { get_number, print } from "../utils/io_utils.js";

function main() {
    //Entrada
    const numb1 = get_number("Digite um primeiro numero: ");
    const numb2 = get_number("Digite um segundo numero: ");

    //Processamento e Saída
    if (num1maiornum2(numb1, numb2)) {
        print(`
        -----------------------------------------------------------------------------
        
            O número ${numb2} é o menor, e ${numb1} por sua vez é o maior.
            
        -----------------------------------------------------------------------------`); 
    } else if (num2maiornum1(numb1, numb2)){
        print(`
        -----------------------------------------------------------------------------
        
            O número ${numb1} é o menor, e ${numb2} por sua vez é o maior.
            
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