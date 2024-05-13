//Receba o valor da base e altura de um triângulo e retorne sua área. (área = (base * altura) / 2)).

import { get_text, print } from "../utils/io_utils.js";
import { calcularAreaTriangulo } from "./LMCCP-Funcoes.js";

function main() {
    const [BASE, ALTURA] = get_text(`Digite a base e altura do triangulo: `).split(` `).map(Number);
    const AREA = calcularAreaTriangulo(BASE, ALTURA);
    print(`Dada ${BASE} base e altura ${ALTURA}, temos que a Area do triângulo é ${AREA}.`);

}

main();