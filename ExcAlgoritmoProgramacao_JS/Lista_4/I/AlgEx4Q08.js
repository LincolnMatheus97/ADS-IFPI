/*
Leia um numero X e, a seguir, leia e escreva uma lista de números com o término da lista ocorrendo 
quando a soma de dois números consecutivos da lista for igual a X. 
*/

import { get_number, get_positive_number, print } from "../../utils/io_utils.js";

function main() {
    const X = get_positive_number(`Digite um numero qualquer: `);
    let soma_numeros = 0;

    while (soma_numeros !== X) {
        let numeros_lista = get_number(`Digite um novo numero qualquer: `);
        print(` ${numeros_lista} `);

        if (numeros_lista + soma_numeros === X) {
            break;
        }

        soma_numeros = numeros_lista;
    }
    print(`Os números são iguais.`);

}

main();