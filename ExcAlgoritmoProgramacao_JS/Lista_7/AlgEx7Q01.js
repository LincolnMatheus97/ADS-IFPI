//Receba uma velocidade em m/s e retorne a equivalente em km/h. (Vkm/h = Vm/s * 3.6).

import { get_number, print } from "../utils/io_utils.js";
import { calcularVelocidadeEmKm } from "./LMCCP-Funcoes.js";

function main() {
    const VELOCIDADE_MS = get_number(`Digite a velocidade que voce quer converter para Km/h: `);
    const VELOCIDADE_KM = calcularVelocidadeEmKm(VELOCIDADE_MS);
    print(`Sua velocidade convertida fica: ${VELOCIDADE_KM} Km/h.`);

}

main();