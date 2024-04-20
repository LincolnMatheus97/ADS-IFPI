/*
Leia uma data no formato DD/MM/AAAA e escreva o mês por extenso (DD de mês de AAAA). 
*/

import { get_text, print } from "../utils/io_utils.js";

function main() {
    const DATA = get_text(`\nDigite uma data qualquer com o formato DD/MM/AAAA: `).split(`/`);

    print(`\n(${DATA[0]} de ${DATA[1]} de ${DATA[2]})`);
}

main();