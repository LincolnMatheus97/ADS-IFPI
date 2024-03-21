/*
Escreva um algoritmo que leia a razão de uma PA (Progressão Aritmética) e o seu primeiro termo e 
escreva os N termos da PA.  Ler o valor de N. 
*/

import { get_positive_number, print } from "../../utils/io_utils.js";

function main() {
    const primeiro_termo = get_positive_number(`Digite o primeiro termo da sua PA: `);
    const N_termos = get_positive_number(`Digite quantos termos voce deseja ver dessa PA: `);
    const razao = get_positive_number(`Digite o valor da razao dessa PA: `);

    let termos_escritos = 1;
    let mensagem = ``;

    while (termos_escritos <= N_termos) {
        let a_termos = primeiro_termo + razao * (termos_escritos - 1);
        mensagem += ` ${a_termos} `;

        termos_escritos++;
    }

    print(`
    Os ${N_termos} da nossa PA de primeiro termo ${primeiro_termo} e razão ${razao} são:
    [ ${mensagem} ]`)
}

main();