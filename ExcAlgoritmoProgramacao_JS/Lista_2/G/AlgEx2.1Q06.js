/*
Leia o turno em que um aluno estuda, sendo M para matutino, V para Vespertino ou N para Noturno e 
escreva a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso.
*/

import { question } from "readline-sync";
import { print } from "../../utils/io_utils.js";

function main() {
    //Entrada
    const turno = question(`
    --> Digite a letra do turno que voce estuda, (M para Matutino, V para Vespertino ou N para Noturno): `).toLocaleUpperCase();

    //Processamento e Saída
    let mensagem;

    if (Eh_Valido(turno)) {
        if (Eh_Matutino(turno)) {
            mensagem = `Bom dia!`;
        } else {
            mensagem = `${Eh_Vespertino(turno) ? `Boa Tarde!` : `Boa Noite!`}`;
        }
        print(`
        --> Seja Bem-vindo !
            ${mensagem}     
        `);
    } else {
        print(`
        Valor Inválido! Dígite a Letra correta do seu turno.`);
    }
}

function Eh_Valido(turno) {
    return (turno === `M` || turno === `V` || turno === `N`);
}

function Eh_Matutino(turno) {
    return turno === `M`;
}

function Eh_Vespertino(turno) {
    return turno === `V`;
}

main();