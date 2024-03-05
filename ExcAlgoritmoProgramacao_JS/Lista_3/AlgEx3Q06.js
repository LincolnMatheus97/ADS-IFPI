/*
Escreva a tabuada dos números de 1 a 10.
*/

import { print } from "../utils/io_utils.js";

function main() {
    //Processamento e Saída
    let fatorb = 1;

    for (fatorb;  Eh_Menor_10(fatorb); fatorb++) {
        let tabuada = Tabuada(fatorb);

        print(`
            ${tabuada}`);
    }
}

function Eh_Menor_10(x) {
    return x <= 10;
}

function Tabuada(fatorb) {
    let mensagem;
    let n = 1;
    mensagem = `Tabuada de ${fatorb}`

    for (n;  Eh_Menor_10(n); n++) {
        mensagem += (`
            ${n} x ${fatorb} = ${n * fatorb}`);
    }
    return mensagem;
}

main();