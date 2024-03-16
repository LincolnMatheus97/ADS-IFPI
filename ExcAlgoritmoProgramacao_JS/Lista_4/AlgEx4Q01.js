/*
Leia uma lista de números e que para cada número lido, escreva o próprio número e a relação de seus 
divisores. (flag número = 0).
*/

import { get_number, print } from "../utils/io_utils.js";

function main() {
    const flag = 0;
    let numero_lido = get_number(`Digite um numero, para descobrir seus divisores: `);

    while (numero_lido !== flag) {
        let divisores = Calcular_Divisores(numero_lido);

        print(`Essa é a lista de divisores de ${numero_lido}: [${divisores}]`);

        numero_lido = get_number(`Digite um novo numero, ou zero(0) para encerrar: `);

    }

    print(`Lista Encerrada.`)
}

function Calcular_Divisores(numero) {
    let inicio = 1;
    let mensagem = ` `;

    while (inicio <= numero) {
        if (numero % inicio === 0) {
            mensagem += `${inicio} `;
        }
        inicio++;
    }

    return mensagem;
}

main();