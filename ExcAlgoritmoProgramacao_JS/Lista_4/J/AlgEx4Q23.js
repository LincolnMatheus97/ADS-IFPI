/*
Escreva um algoritmo que leia a razão de uma PG (Progressão Geométrica) e o seu primeiro termo e 
escreva os N termos da PG.  Ler o valor de N. 
*/

import { get_positive_number, print } from "../../utils/io_utils.js";

function main() {
    const primeiro_termo = get_positive_number(`Digite o primeiro termo da sua PG: `);
    const N_termos = get_positive_number(`Digite quantos termos voce deseja ver dessa PG: `);
    const razao = get_positive_number(`Digite o valor da razao da sua PG: `);

    let termos_escritos = 1;
    let mensagem = ``;

    while (termos_escritos <= N_termos) {
        let a_termos = primeiro_termo * (razao) ** (termos_escritos - 1);
        mensagem += ` ${a_termos} `;

        termos_escritos++
    }
    print(`
    Os ${N_termos} da nossa PG de primeiro termo ${primeiro_termo} e razão ${razao} são:
    [ ${mensagem} ]`)
}

main();