/*
Escreva a seguinte matriz:
        1 1 1 1 1 1 
        1 2 2 2 2 1 
        1 2 3 3 2 1 
        1 2 3 3 2 1 
        1 2 2 2 2 1 
        1 1 1 1 1 1 
*/

import { print } from "../utils/io_utils.js";

function main() {
    let matriz = [];
    let mensagem = ``;

    for (let i = 0; i < 6; i++) {
        let linha = [];

        for (let j = 0; j < 6; j++) {

            if (i === 0 || i === 5) {
                linha.push(1);

            } else if (i === 1 || i === 4) {

                if (j === 1 || j === 2 || j === 3 || j === 4) {
                    linha.push(2);

                } else {
                    linha.push(1);
                }

            } else if (i === 2 || i === 3) {

                if (j === 1 || j === 4) {
                    linha.push(2);

                } else if (j === 2 || j === 3) {
                    linha.push(3);

                } else {
                    linha.push(1);

                }

            }

        }
        matriz.push(linha);

    }

    for (let m = 0; m < matriz.length; m++) {
        mensagem += `\n\t\t${matriz[m].join(` `)}`;

    }

    print(`
    ----------------------------------------------------------------------
    
    ${mensagem}
    
    ----------------------------------------------------------------------`);

}

main();