/*
Leia 3 (três) números, verifique e escreva o maior entre os números lidos.
*/

import { get_number, print } from "../../utils/io_utils.js";

function main() {
    //Entrada
    const numb1 = get_number("Digite um primeiro numero: ");
    const numb2 = get_number("Digite um segundo numero: ");
    const numb3 = get_number("Digite um terceiro numero: ");

    //Processamento e Saída
    if (Maior_Numr(numb1, numb2, numb3)) {
        const maior = Maior_Numr(numb1, numb2, numb3);
        print(`
        ----------------------------------------------------------------------------
            
            Dado os números digitados, ${numb1}, ${numb2} e ${numb3}.
            Podemos dizer que o maior número é ${maior}.
                
        ----------------------------------------------------------------------------`);
    } else {
        print(`
        ----------------------------------------------------------------------------
        
            Dado os números digitados, ${numb1}, ${numb2} e ${numb3}.
            Podemos que três números são iguais.
            
        ----------------------------------------------------------------------------`);
    };
}

function Maior_Numr(numb1, numb2, numb3) {
    if (numb1 > numb2 || numb1 > numb3 || numb2 > numb1 ||
        numb2 > numb3 || numb3 > numb1 || numb3 > numb2) {
            
        const numero = Math.max(numb1, numb2, numb3);
        return numero;
    } else {
        return Maior_Numr = false;
    }
}
main();