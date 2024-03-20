/*
Leia 2 (dois) números, calcule e escreva o mmc (mínimo múltiplo comum) entre os números lidos.
*/

import { get_positive_number, print } from "../utils/io_utils.js";

function main() {
    print(`>>>>>>>>>>>      CALCULADORA DE MMC          >>>>>>>>>>>`);
    
    const numero_1 = get_positive_number(`Digite um primeiro numero: `);
    const numero_2 = get_positive_number(`Digite um segundo numero: `);
    
    let maximo = Math.max(numero_1, numero_2);
    let mensagem = 0;

    while (true) {
        if(maximo % numero_1 === 0 && maximo % numero_2 === 0) {
            mensagem = maximo;
            break;
        }
        maximo++;
    }
    print(`O MMC DE ${numero_1} e ${numero_2} é ${mensagem}.`);
}

main();