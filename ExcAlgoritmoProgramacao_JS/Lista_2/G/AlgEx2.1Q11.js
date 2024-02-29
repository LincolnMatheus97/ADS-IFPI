/*
Leia um número inteiro menor que 1000 e imprima a quantidade de centenas, dezenas e unidades do
número. Observando os termos no plural a colocação do "e", da vírgula entre outros. Exemplos:
o 326 = 3 centenas, 2 dezenas e 6 unidades
o 12 = 1 dezena e 2 unidades.
*/

import { get_number, print } from "../../utils/io_utils.js";

function main() {
    //Entrada
    const numero = get_number(`
    ---> Digite um numero inteiro menor que 1000: `);

    //Processamento e Saída
    let centena;
    let dezena;
    let unidade;
    let mensagem_1;
    let mensagem_2;
    let mensagem_3;

    if (Eh_Menor_Q_1000(numero)) {
        centena = Math.floor(numero / 100);
        dezena = Math.floor((numero % 100) / 10);
        unidade = numero % 10;

        if (Centena_Maior_Q_Zero(centena)) {
            mensagem_1 = `${centena === 1 ? 'centena' : 'centenas'}`;
            mensagem_1 += `,`;

        } else {
            centena = ``;
            mensagem_1 = ``;
        }

        if (Dezena_Maior_Q_Zero(dezena)) {
            mensagem_2 = `${dezena === 1 ? 'dezena ' : 'dezenas '}`;
            mensagem_2 += 'e';

        } else {
            dezena = ``;
            mensagem_2 = ``;
        }

        if (Unidade_Maior_Q_Zero(unidade)) {
            mensagem_3 = `${unidade === 1 ? 'unidade.' : 'unidades.'}`;

        } else {
            unidade = ``;
            mensagem_3 = ``;

        }
        print(`
        -----------------------------------------------------------------------------------------
            
            ${numero} = ${centena} ${mensagem_1} ${dezena} ${mensagem_2} ${unidade} ${mensagem_3}
        
        -----------------------------------------------------------------------------------------`);

    } else {
        print(`
        ------------------------------------------------------------------------
            
            ${numero}, valor inválido. Digite um valor menor que 1000.
        
        ------------------------------------------------------------------------`);
    }
}

function Eh_Menor_Q_1000(numero) {
    return numero < 1000;
}

function Centena_Maior_Q_Zero(centena) {
    return centena > 0;
}

function Dezena_Maior_Q_Zero(dezena) {
    return dezena > 0;
}

function Unidade_Maior_Q_Zero(unidade) {
    return unidade > 0;
}

main();