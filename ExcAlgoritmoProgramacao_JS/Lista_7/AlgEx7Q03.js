//Receba o valor do dólar e um valor em dólar e retorne o equivalente em real (R$).

import { get_number, print } from "../utils/io_utils.js";
import { determinarEmReal } from "./LMCCP-Funcoes.js";

function main() {
    const VALOR_DOLAR = get_number(`Digite a quantidade de dolar que desejar converter para real: `);
    const VALOR_REAL = determinarEmReal(VALOR_DOLAR);
    print(`$${VALOR_DOLAR} convertido para real: R$:${VALOR_REAL}`);

}

main();