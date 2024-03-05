/*
Leia LimiteSuperior e LimiteInferior e escreva todos os números ímpares entre os limites lidos.
*/

import { get_number, print } from "../utils/io_utils.js";

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

        if (Eh_Impar(numeros)) {
            print(`${numeros}`);
        }
    }
}

function Entre_Limites(inferior, superior) {
    return inferior <= superior;
}

function Eh_Impar(num) {
    return (num % 2 !== 0);
}

main();