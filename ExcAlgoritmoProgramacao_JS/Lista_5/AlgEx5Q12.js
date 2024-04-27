/*
Leia uma matriz quadrada de ordem N, calcule e escreva a soma dos elementos da diagonal principal, 
a soma dos elementos da diagonal secundária e a soma dos elementos que não estão na diagonal 
principal nem na diagonal secundária.
*/

import { get_number, get_random_number, print } from "../utils/io_utils.js";

function main() {
    const N = get_number(`\nDigite a ordem da sua matriz quadrada: `);
    let matriz = [];
    let somatorioDiagPrincipal = 0;
    let somatorioDiagSecundaria = 0;
    let somatorioForaDiagonais = 0;
    let mensagem = ``;

    for (let i = 0; i < N; i++) {
        let linha = [];

        for (let j = 0; j < N; j++) {
            let valor = Math.floor(get_random_number(1, 10));
            linha.push(valor);

            if (i === j) {
                somatorioDiagPrincipal += valor;

            }
            if (i + j === N - 1) {
                somatorioDiagSecundaria += valor;

            }
            if (!(i === j) && !(i + j === N - 1)) {
                somatorioForaDiagonais += valor;

            }

        }
        matriz.push(linha);

    }

    for (let m = 0; m < matriz.length; m++) {
        mensagem += `\n\t\t${matriz[m].join(` `)}`;

    }

    print(`
    ----------------------------------------------------------------------------------
    -> Sua Matriz de ordem ${N}:
    ${mensagem}
    
    -> A soma dos valores da Diagonal Principal é:      ${somatorioDiagPrincipal}.
    -> A soma dos valores da Diagonal Secundária é:     ${somatorioDiagSecundaria}.
    -> A soma dos valores fora das Diagonais é:         ${somatorioForaDiagonais}.
    
    ----------------------------------------------------------------------------------`);

}

main();