//Receba um número e retorne seu fatorial.

import { get_number, print } from "../utils/io_utils.js";
import { calcularFatorial } from "./LMCCP-Funcoes.js";

function main() {
    const NUMERO = get_number(`Digite um numero inteiro qualquer: `);
    const FATORIAL = calcularFatorial(NUMERO);
    print(`Dado o número ${NUMERO}, seu fatorial é ${FATORIAL}.`);

}

main();