/*
Leia um número e divida-o por dois  (sucessivamente) até que o resultado seja menor que 1. Escreva o 
resultado da última divisão efetuada.
*/

import { get_positive_number, print } from "../utils/io_utils.js";

function main() {
    const numero = get_positive_number(`Digite um numero: `);
    let quociente = numero / 2;

    while (true) {
        let novo_quociente = (quociente / 2);

        if(novo_quociente < 1 ) {
            print(`${novo_quociente}`);
            break;
        }

        quociente = novo_quociente;
    }
}

main();