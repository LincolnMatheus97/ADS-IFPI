/*Escreva uma moldura na tela. As coordenadas (linha e coluna) do canto superior esquerdo e do canto
inferior direito devem ser passadas como parâmetros.
*/

import { get_text, print } from "../utils/io_utils.js";
import { criarMoldura } from "./LMCCP-Funcoes.js";

function main() {
    const LINHA = get_text(`Digite o a largura da sua moldura: `);
    const COLUNA = get_text(`Digite a altura da sua moldura: `);

    const MOLDURA = criarMoldura(LINHA, COLUNA);

    print(MOLDURA);

}

main();