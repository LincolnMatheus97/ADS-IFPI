/*
Leia N, calcule e escreva os N primeiros termos de seqüência (1, 3, 6, 10, 15,...).
*/

import { get_number, print } from "../../utils/io_utils.js";

function main() {
    //Entrada
    const N = get_number(`Digite o numero (N) qualquer: `);

    //Processamento
    let i = 1;
    let mensagem;
    let termos = 1;

    mensagem = `O sequência: `;

    for (i; Ate_N(i, N); i++) {
        mensagem += `${termos}, `;
        termos += i + 1;

    }

    //Saída
    print(mensagem);

}

function Ate_N(num1, num2) {
    return num1 <= num2;
}

main();