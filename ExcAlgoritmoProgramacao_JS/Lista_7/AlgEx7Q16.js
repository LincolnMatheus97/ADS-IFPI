//Receba 2 (dois) números e retorne o MDC (máximo divisor comum) entre os números lidos.

import { get_text, print } from "../utils/io_utils.js";
import { calcularMDC } from "./LMCCP-Funcoes.js";

function main() {
    const [NUMERO_1, NUMERO_2] = get_text(`Digite dois numeros: `).split(` `).map(Number);
    const MDC = calcularMDC(NUMERO_1, NUMERO_2);
    print(`O MDC de ${NUMERO_1} e ${NUMERO_2} é ${MDC}.`);

}

main();