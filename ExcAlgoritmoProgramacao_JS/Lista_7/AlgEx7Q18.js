//Escreva uma linha vertical na tela. O número da linha deve ser passado como parâmetro.

import { get_number, print } from "../utils/io_utils.js";
import { criarLinhaVertical } from "./LMCCP-Funcoes.js";

function main() {
    const TAMANHO = get_number(`Digite o tamanho da sua linha: `);
    print(`${criarLinhaVertical(TAMANHO)}`);

}

main();