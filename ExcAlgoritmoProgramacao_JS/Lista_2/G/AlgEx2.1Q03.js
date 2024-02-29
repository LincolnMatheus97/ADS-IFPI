/*
Leia uma letra e verifique se a letra digitada é vogal ou consoante.
*/

import { question } from "readline-sync";
import { print } from "../../utils/io_utils.js";

function main() {
    //Entrada
    const letra = question(`
    ---->   Digite uma vogal ou consoante: `).toLocaleUpperCase();

    //Processamento
    let mensagem = `${Eh_Vogal(letra) ? `Vogal` : `Consoante`}`;

    //Saída
    print(`
    ---->   A letra digitada ${letra} é uma ${mensagem}`);
}

function Eh_Vogal(letra) {
    return (letra === `A` || letra === `E` || letra === `I` ||
        letra === `O` || letra === `U`);
}

main();