/*
Leia LimiteSuperior e LimiteInferior e escreva todos os números pares entre os limites lidos.
*/

import { get_number, print } from "../../utils/io_utils.js";

function main() {
    //Entrada
    const LimSuperior = get_number(`
    ----> Digite um numero para o Limite Superior: `);
    const LimInferior = get_number(`
    ----> Digite um numero para o Limite Inferior: `);

    //Processamento e Saída
    let limiteInf = LimInferior;
    let numeros;
    
    for (limiteInf; Entre_Limites(limiteInf, LimSuperior); limiteInf++) {
        numeros = limiteInf;

        if (Eh_Par(numeros)) {
            print(`${numeros}`);
        }
    }

}

function Entre_Limites(inferior, superior) {
    return inferior <= superior;
}

function Eh_Par(num) {
    return (num % 2 === 0);
}

main();