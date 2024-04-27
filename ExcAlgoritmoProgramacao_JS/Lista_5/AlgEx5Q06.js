/*
Leia um número (vetor com 8 elementos) na base binária, calcule e escreva este número na base 
hexadecimal e na base decimal.
*/

import { get_text, print, reverse } from "../utils/io_utils.js";

function main() {
    const BINARIO = get_text(`\nDigite um numero binario de 8 algarismos: `).split(``);
    
    let reversoBinario = transformarParaNumero(BINARIO);
    let numeroBaseDecimal = transformarParaDecimal(reversoBinario);
    let numeroBaseHexadecimal = transformarParaHexadecimal(numeroBaseDecimal);

    print(`
    -------------------------------------------------------------------------------
    Número Binário no vetor:                [${BINARIO}].
    Número Binário na Base Hexadecimal:     ${reverse(numeroBaseHexadecimal)}.
    Número Binário na Base Decimal:         ${numeroBaseDecimal}.
    -------------------------------------------------------------------------------`);
}

function transformarParaNumero(string) {
    let binario = string[string.length - 1];
    
    for(let i = 1; i < string.length; i++) {
        binario += string[(string.length - 1) - i];
    }
    
    return binario;
}

function transformarParaDecimal(binario) {
    let decimal = 0;

    for(let i = 0; i < binario.length; i++) {
        decimal += binario[i] * (2 ** i);
    }

    return decimal;
}

function transformarParaHexadecimal(decimal) {
    let divisao = decimal;
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