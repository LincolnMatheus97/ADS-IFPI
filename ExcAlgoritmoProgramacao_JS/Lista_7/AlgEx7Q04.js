//Receba uma velocidade em km/h e retorne o equivalente em m/s. (Vm/s = Vkm/h / 3.6).

import { get_number, print } from "../utils/io_utils.js";
import { calcularVelocidadeEmMs } from "./LMCCP-Funcoes.js";

function main() {
    const VELOCIDADE_KM = get_number(`Digite sua velocidade em Km `);
    const VELOCIDADE_MS = calcularVelocidadeEmMs(VELOCIDADE_KM);
    print(`${VELOCIDADE_KM} convertida para M/s ${VELOCIDADE_MS}.`);

}

main();