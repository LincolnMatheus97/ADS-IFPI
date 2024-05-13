//Receba o valor de um ano e retorne se o ano é bissexto ou não.

import { get_number, print } from "../utils/io_utils.js";
import { ehAnoBissexto } from "./LMCCP-Funcoes.js";

function main() {
    const ANO = get_number(`Digite um ano qualquer: `);
    const BISSEXTO = ehAnoBissexto(ANO);
    BISSEXTO === true ? print(`O ano é Bissexto.`) : print(`O ano não é Bissexto.`);

}

main();