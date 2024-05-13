//Receba 2 (dois) números e retorne o MMC (mínimo múltiplo comum) entre os números lidos.

import { get_text, print } from "../utils/io_utils.js";
import { calcularMMC } from "./LMCCP-Funcoes.js";

function main() {
    const [NUMERO_1, NUMERO_2] = get_text(`Digite dois numeros: `).split(` `).map(Number);
    const MMC = calcularMMC(NUMERO_1, NUMERO_2);
    print(`O MMC de ${NUMERO_1} e ${NUMERO_2} é ${MMC}.`);

}

main();