//Receba o valor do raio de uma esfera e retorne seu volume. (v = (4 * p * r3) / 3) (p = 3,14).

import { get_number, print } from "../utils/io_utils.js";
import { calcularVolumeEsfera } from "./LMCCP-Funcoes.js";

function main() {
    const RAIO = get_number(`Digite o valor do raio da sua esfera: `);
    const VOLUME = calcularVolumeEsfera(RAIO);
    print(`Dado o raio ${RAIO}, assim o volume da esfera é ${VOLUME}.`);

}

main();