/*
Os editores de texto possuem um recurso que permite que o usuário substitua uma sub-cadeia de um 
texto por outra cadeia de caracteres. Escreva um programa que realize esta ação numa frase dada.
*/

import { get_text, print } from "../utils/io_utils.js";

function main() {
    const FRASE = get_text(`\nDigite sua frase: `);
    let suaFrase = FRASE.split(` `);
    let palavrasRetiradas = get_text(`\nSua Frase ${FRASE}, digite as palavras que voce deseja retirar: `).split(` `);
    let novaFrase = [];
    let fraseAntiga = FRASE.split(` `);

    for (let i = 0; i < palavrasRetiradas.length; i++) {
        suaFrase = suaFrase.filter(suaFrase => suaFrase !== palavrasRetiradas[i]);

    }
    novaFrase.push(suaFrase.join(` `));
    let novasPalavras = get_text(`\nSua frase agora esta assim depois de retirar as palavras, ${novaFrase},\nDigite as palavras que voce deseja adicionar: `).split(` `);
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let palavraNova = ``;

    while (count1 < fraseAntiga.length) {
        if (fraseAntiga[count1] == suaFrase[count2]) {
            palavraNova += suaFrase[count2] + " ";
            count2++;
        } else if (count2 === suaFrase.length && fraseAntiga[count1] === fraseAntiga.length) {
            break;
        } else {
            palavraNova += novasPalavras[count3] + " ";
            count3++;
        }
        count1++;
    }
    console.log(palavraNova);

}

main();