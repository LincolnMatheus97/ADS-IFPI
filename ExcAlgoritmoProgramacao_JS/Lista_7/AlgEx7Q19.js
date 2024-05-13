//Escreva uma linha horizontal na tela. O número da coluna deve ser passado como parâmetro.

import { get_number, print } from "../utils/io_utils.js";
import { criarLinhaHorizontal } from "./LMCCP-Funcoes.js";

function main() {
    const TAMANHO = get_number(`Digite o tamanho da sua linha: `);
    print(`${criarLinhaHorizontal(TAMANHO)}`);

}

main();