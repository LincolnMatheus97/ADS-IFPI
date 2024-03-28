/*
Leia LimiteSuperior e LimiteInferior e escreva todos os números primos entre os limites lidos.
*/

import { get_number, print } from "../../utils/io_utils.js";

function main() {
    //Entrada
    const LimSuperior = get_number(`
    ----> Digite um numero referente ao Limite Superior: `);
    const LimInferior = get_number(`
    ----> Digite um numero referente ao Limite Inferior: `);

    //Processamento e Saída
    let limiteinf = LimInferior;
    let numeros;

    for (limiteinf; Entre_Limites(limiteinf, LimSuperior); limiteinf++) {
        numeros = limiteinf;
        if (Eh_primo(numeros)) {
            print(`
                ${numeros}`);
        }
    }
}

function Entre_Limites(inferior, superior) {
    return inferior <= superior;
}

function Eh_primo(num) {
    if (num <= 1) {
        return false;
    } else if (num === 2) {
        return true;
    } else if (num % 2 === 0) {
        return false;
    } else if (num === 3 || num === 5 || num === 7) {
        return true;
    } else if (num % 3 === 0 || num % 5 === 0 || num % 7 === 0) {
        return false;
    } else {
        return true;
    }
}

main();
