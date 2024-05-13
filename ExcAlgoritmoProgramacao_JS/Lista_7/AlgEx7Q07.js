//Receba o valor da base e altura de um retângulo e retorne sua área. (área = base * altura).

import { get_text, print } from "../utils/io_utils.js";
import { calcularAreaRetangulo } from "./LMCCP-Funcoes.js";

function main() {
    const [BASE, ALTURA] = get_text(`Digite a base e altura do retangulo: `).split(` `).map(Number);
    const AREA = calcularAreaRetangulo(BASE, ALTURA);
    print(`Dada base ${BASE} e altura ${ALTURA}, temos que a area ${AREA}.`);

}

main();