/*
Leia um número (entre 0 e 255) na base decimal, calcule e escreva este número na base binária 
e na base hexadecimal. 
*/

import { get_number, print, reverse } from "../utils/io_utils.js";

function main() {
    const decimal = get_number(`Digite um numero entre 0 e 255: `);

    if(Eh_decimal_valido(decimal)) {
        let binario = Calcular_Binario(decimal);
        let hexadecimal = Calcular_Hexadecimal(decimal);

        print(`
        >>>>>>>>>>          DEC TO BIN AND HEXA         >>>>>>>>>>                 
        
        O número escolhido foi ${decimal}:
        
        Na base decimal é --->      ${decimal}
        Na base binária é --->      ${reverse(binario) /*Jeito nativo de pegar o reverso de uma string*/} 
        Na base hexadecimal é -->   ${reverse(hexadecimal)} 
        
        `);
    }else {
        print(`Número digitado inválido, Tente Novamente !`);
    }
}

function Eh_decimal_valido(numero) {
    return (numero >= 0 && numero <= 255);
}

function Calcular_Binario(numero) {
    let divisao = numero;
    let mensagem = ``;

    if(divisao === 0) {
        mensagem += `0`;

    } else {
        while (divisao > 0) {
            let resultado = Math.floor(divisao / 2);
            
            let resto = divisao % 2;
            mensagem += `${resto}`;
    
            divisao = resultado;
        }

    }
    return mensagem;
}

function Calcular_Hexadecimal(numero) {
    let divisao = numero;
    let mensagem = ``;

    if(divisao === 0) {
        mensagem += `0`;
    } else {
        while (divisao > 0) {
            let resultado = Math.floor(divisao / 16);
            
            let resto = divisao % 16;
            if(resto >= 10 ) {
                resto = (resto === 10) ? `A` : (resto === 11) ? `B` : (resto === 12) ? `C` : (resto === 13) ? `D` : (resto === 14) ? `E` : `F`;
            }
            mensagem += `${resto}`;
    
            divisao = resultado
        }
    }
    return mensagem;
}

main();