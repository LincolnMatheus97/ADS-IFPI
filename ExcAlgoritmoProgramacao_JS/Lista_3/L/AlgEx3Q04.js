/*
Leia as variáveis A0, Limite e R e escreva os valores menores que Limite gerados pela Progressão 
Geométrica que tem por valor inicial A0 e razão R.
*/

import { get_number, print } from "../../utils/io_utils.js";

function main() {
    //Entrada
    const a1 = get_number(`Digite o valor de A0 da sua sequencia: `);
    const limite = get_number(`Digite o Limite da sequencia: `);
    const r = get_number(`Digite a Razao(R) da sequencia: `);

    //Processamento e Saída
    let termos_PG = a1;

    for (termos_PG; Eh_Menor_Q_Limite(termos_PG, limite); termos_PG *= r) {
        print(`${termos_PG}`);
    }

}

function Eh_Menor_Q_Limite(termos_PG, limite) {
    return (termos_PG < limite);
}
main();