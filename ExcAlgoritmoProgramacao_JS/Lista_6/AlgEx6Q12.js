/*
As companhias de transportes aéreos costumam representar os nomes dos passageiros no formato último 
sobrenome/nome. Por exemplo, o passageiro Carlos Drummond de Andrade seria indicado por 
Andrade/Carlos. Escreva um programa que leia um nome completo e o escreva no formato acima. 
*/

import { get_text, print } from "../utils/io_utils.js";

function main() {
    const NOME_PASSAGEIRO = get_text(`\nDigite seu nome completo: `).split(` `);
    let nomeFormatado = `${NOME_PASSAGEIRO[NOME_PASSAGEIRO.length - 1]}/${NOME_PASSAGEIRO[0]}`;
    let seuNomeCompleto = ``;

    for(let i = 0; i < NOME_PASSAGEIRO.length; i++) {
        if(i + 1 === NOME_PASSAGEIRO.length) {
            seuNomeCompleto += `${NOME_PASSAGEIRO[i]}`;
            break;
        }
        seuNomeCompleto += `${NOME_PASSAGEIRO[i]} `;
    }

    print(`\nSeu nome completo é ${seuNomeCompleto}, \nSua identificação de passagem é ${nomeFormatado}\n`);

}

main();