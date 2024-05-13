//Receba o valor do lado de um quadrado, calcule e retorne sua área. (área = lado2).

import { get_number, print } from "../utils/io_utils.js";
import { calcularAreaQuadrado } from "./LMCCP-Funcoes.js";

function main() {
    const LADO = get_number(`Determine o valor do lado do quadrado: `);
    const AREA = calcularAreaQuadrado(LADO);
    print(`Dado o lado ${LADO} temos que a área do quadrado é ${AREA}.`);

}

main();