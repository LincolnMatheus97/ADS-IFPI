//Receba um número e retorne se o número é ou não primo.

import { get_number, print } from "../utils/io_utils.js";
import { ehPrimo } from "./LMCCP-Funcoes.js";

function main() {
    const NUMERO = get_number(`Digite um numero inteiro qualquer: `);
    const PRIMO = ehPrimo(NUMERO);
    PRIMO === true ? print(`Sim, o número ${NUMERO} é Primo.`) : print(`Não, o número ${NUMERO} não é Primo.`);

}

main();