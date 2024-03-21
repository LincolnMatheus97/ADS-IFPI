/*
Leia um número e, a seguir, leia uma lista de números até achar um igual ao primeiro número lido.
*/

import { get_positive_number, print } from "../../utils/io_utils.js";

function main() {
    const numero = get_positive_number(`Digite um numero qualquer: `);
    let novo_numero = 0;

    while (numero !== novo_numero) {
        novo_numero = get_positive_number(`Digite um novo numero qualquer e direi se e igual ou não ao que foi digitado inicialmente: `);
        
        if(numero !== novo_numero) {
            print(`Os números não são iguais, tente novamente !`);   
        }

    }
    print(`Os números dígitados são iguais !`);
}

main();