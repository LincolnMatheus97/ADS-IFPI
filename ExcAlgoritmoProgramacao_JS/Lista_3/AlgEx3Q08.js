/*
Leia N , LimiteSuperior e LimiteInferior e escreva todos os múltiplos de N entre os limites lidos.
*/

import { get_number, print } from "../utils/io_utils.js";

function main() {
    //Entrada
    const N = get_number(`
    ----> Digite um numero N: `);
    const LimSuperior = get_number(`
    ----> Digite o Limite Superior de N: `);
    const LimInferior = get_number(`
    ----> Digite o Limite Inferior de N: `);

    //Processamento e Saída
    let m = 0;
    let multiplo = 0;

    for (m; Ate_Igual_100(m); m++) {
        multiplo = N * m;

        if (Dentro_Dos_Limites(LimInferior, LimSuperior, multiplo)) {
            print(`${multiplo}`);
        }
    }
}

function Ate_Igual_100(m) {
    return m <= 100;
}

function Dentro_Dos_Limites(LimInferior, LimSuperior, multiplo) {
    return (multiplo >= LimInferior && multiplo <= LimSuperior);
}

main();