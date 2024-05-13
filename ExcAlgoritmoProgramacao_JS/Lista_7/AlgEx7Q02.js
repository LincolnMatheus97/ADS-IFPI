//Receba um valor em horas e um valor em minutos e retorne o equivalente em minutos.

import { get_text, print } from "../utils/io_utils.js";
import { determinarMinutos } from "./LMCCP-Funcoes.js";

function main() {
    const [HORA, MINUTO] = get_text(`Digite a hora e os minutos que deseja converter, EX:(18:30). Sua resposta: `).split(`:`).map(Number);
    const MINUTOSTOTAIS = determinarMinutos(HORA, MINUTO);
    print(`${HORA}:${MINUTO} em minutos: ${MINUTOSTOTAIS}.`);

}

main();