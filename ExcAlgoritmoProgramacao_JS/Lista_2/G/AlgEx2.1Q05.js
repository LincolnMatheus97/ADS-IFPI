/*
Leia o preço de três produtos e informe qual produto deve ser comprado, sabendo que a decisão é 
sempre pelo mais barato.
*/

import { get_number, print } from "../../utils/io_utils.js";

function main() {
    //Entrada
    const preco1 = get_number(`
    ---> Digite o valor do primeiro produto: `);
    const preco2 = get_number(`
    ---> Digite o valor do segundo produto: `);
    const preco3 = get_number(`
    ---> Digite o valor do terceiro produto: `);

    //Processamento e Saída
    let menor_preco;

    if (Eh_Mais_Barato(preco1, preco2, preco3)) {
        if (Prodt1_EhMaisBarato(preco1, preco2, preco3)) {
            menor_preco = `${preco1}`;

        } else {
            menor_preco = `${Prodt2_EhMaisBarato(preco1, preco2, preco3) ? `${preco2}` : `${preco3}`}`;
        }
        print(`
        #### TABELA DE PREÇOS ####
        -> Preço 1 em R$: ${preco1}
        -> Preço 2 em R$: ${preco2}
        -> Preço 3 em R$: ${preco3}
        _______________________________
        O preço mais barato é ${menor_preco}`);
    } else {
        print(`
        #### TABELA DE PREÇOS ####
        -> Preço 1 em R$: ${preco1}
        -> Preço 2 em R$: ${preco2}
        -> Preço 3 em R$: ${preco3}
        _______________________________
        Os produtos tem o mesmos preços.`);
    }

}

function Eh_Mais_Barato(preco1, preco2, preco3) {
    return (Prodt1_EhMaisBarato(preco1, preco2, preco3) ||
        Prodt2_EhMaisBarato(preco1, preco2, preco3) ||
        (preco3 < preco1 && preco3 < preco2));
}

function Prodt1_EhMaisBarato(preco1, preco2, preco3) {
    return (preco1 < preco2 && preco1 < preco3);
}

function Prodt2_EhMaisBarato(preco1, preco2, preco3) {
    return (preco2 < preco1 && preco2 < preco3);
}

main();