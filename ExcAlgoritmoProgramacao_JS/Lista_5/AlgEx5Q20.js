/*
Escreva a seguinte matriz:
        01 02 03 04 05 
        06 07 08 09 10 
        11 12 13 14 15 
        16 17 18 19 20 
        21 22 23 24 25
*/

import { print } from "../utils/io_utils.js";

function main() {
    let matriz = [];
    let mensagem = ``;
    let count = 1;

    for (let i = 0; i < 5; i++) {
        let linha = [];

        for (let j = 0; j < 5; j++) {
            if (count < 10) {
                linha.push(`0` + count);

            } else {
                linha.push(count);

            }
            count++;

        }
        matriz.push(linha);

    }
    for (let m = 0; m < matriz.length; m++) {
        mensagem += `\n\t\t${matriz[m].join(` `)}`;

    }

    print(`
    ---------------------------------------
    
    ${mensagem}
    
    ---------------------------------------`);

}

main();