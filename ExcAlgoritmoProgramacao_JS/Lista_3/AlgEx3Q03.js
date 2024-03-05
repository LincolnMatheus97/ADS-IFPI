/*
Leia as variáveis A0, Limite e R e escreva os valores menores que Limite gerados pela Progressão 
Aritmética que tem por valor inicial A0 e razão R.
*/

import { get_number, print } from "../utils/io_utils.js";

function main() {
    //Entrada
    const a1 = get_number (`Digite o valor de A0 da sua sequencia: `);
    const limite = get_number (`Digite o Limite da sequencia: `);
    const r = get_number (`Digite a Razao(R) da sequencia: `);

    //Processamento
    let termos_PA = a1;

    for(termos_PA; Eh_Menor_Q_Limite(termos_PA, limite); termos_PA += r) {
        print(`${termos_PA}`)
    }
}

function Eh_Menor_Q_Limite(termos_PA, limite) {
    return (termos_PA < limite);
}

main();