//Receba uma data (dia, mês e ano) e retorne se a data é ou não válida.

import { get_text, print } from "../utils/io_utils.js";
import { ehValida } from "./LMCCP-Funcoes.js";

function main() {
    const [ANO, MES, DIA] = get_text(`Digite uma data, EX:(22/02/2024). Sua data: `).split(`/`).map(Number);
    const DATAVERIFICADA = ehValida(ANO, MES, DIA);
    DATAVERIFICADA === true ? print(`Data Válida.`) : print(`Data Inválida.`);

}

main();