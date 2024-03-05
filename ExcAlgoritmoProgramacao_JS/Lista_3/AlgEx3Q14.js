/*
Leia N, calcule e escreva o maior quadrado menor ou igual a N. Por exemplo, se N for igual a 38, o 
maior quadrado menor que 38 é 36 (quadrado de 6).
*/

import { get_number, print } from "../utils/io_utils.js";

function main() {
    //Entrada
    const N = get_number(`Digite um numero (N) qualquer: `);

    //Processamento
    let i = 0;
    let quadrado;
    let maior = 0;
    let mensagem;

    mensagem = (`O Maior Quadrado: `);

    for (i; Ate_N(i, N); i++) {
        quadrado = i ** 2;

        if (Eh_MaiorQuadrado(quadrado, N)) {
            maior = quadrado;
        }

    }
    mensagem += maior;

    //Saída
    print(`${mensagem}`);

}

function Ate_N(num1, num2) {
    return num1 <= num2;
}

function Eh_MaiorQuadrado(quadrado, N) {
    return quadrado <= N;
}

main();