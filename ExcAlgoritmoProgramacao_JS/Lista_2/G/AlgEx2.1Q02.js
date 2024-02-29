/*
Leia uma letra, verifique se letra é "F" ou "M" e escreva F - Feminino, M - Masculino, Sexo Inválido.
*/

import { question } from "readline-sync";
import { print } from "../../utils/io_utils.js";

function main() {
    //Entrada
    const letra = question(`
    ---->   Escreva a letra referente seu sexo: `).toLocaleUpperCase();

    //Processo
    let mensagem;
    if (Eh_Valido(letra)) {
        mensagem = `${(letra === `F`) ? `FEMININO` : `MASCULINO`}`;
    } else {
        mensagem = `SEXO INVÁLIDO`;
    }

    //Saída
    print(`
        ${letra} - ${mensagem}.`);
}

function Eh_Valido(letra) {
    return (letra === `F` || letra === `M`);
}

main();