/*
Leia uma string no formato hh:mm:ss e escreva o resultado na seguinte forma:  “hh hora(s), mm 
minuto(s) e ss segundo(s)”.
*/

import { get_text, print } from "../utils/io_utils.js";

function main() {
    const HORARIO = get_text(`\nDigite um horario qualquer, Ex: 22:25:59. Seu horario: `).split(`:`);
    print(`Seu horário é "${HORARIO[0]} hora(s), ${HORARIO[1]} minuto(s) e ${HORARIO[2]} segundo(s)".\n`);
}

main();