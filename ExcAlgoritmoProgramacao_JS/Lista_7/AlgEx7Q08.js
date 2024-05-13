//Receba o valor do raio de uma circunferência e retorne seu comprimento.(c = 2 * p * r).

import { get_number, print } from "../utils/io_utils.js";
import { determinarComprimentoCircunferencia } from "./LMCCP-Funcoes.js";

function main() {
    const RAIO = get_number(`Digite o valor do raio da sua circunferencia: `);
    const COMPRIMENTO = determinarComprimentoCircunferencia(RAIO);
    print(`Dado o raio ${RAIO}, o comprimento da sua circunferência ${COMPRIMENTO}.`);

}

main();