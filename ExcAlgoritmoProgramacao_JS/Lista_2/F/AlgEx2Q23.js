/*
Leia 2 datas (cada data é composta por 3 variáveis inteiras: dia, mês e ano) e escreva qual delas é a mais 
recente.
*/

import { print, get_date } from "../../utils/io_utils.js";

function main() {
    //Entrada
    console.log(`
    ----Digite abaixo as datas, com base no calendario americano, Ex: 11/03/1997 (Mes/Dia/Ano)------`);
    const data1 = get_date(`
    ----Data 1: `);
    const data2 = get_date(`
    ----Data 2: `);

    //Processamento
    let ano1 = data1.getFullYear();
    let mes1 = data1.getMonth();
    let dia1 = data1.getDate();
    let ano2 = data2.getFullYear();
    let mes2 = data2.getMonth();
    let dia2 = data2.getDate();

    if (Ano1_Eh_Maior(ano1, ano2)) {
        print(`
        A data mais recente é: ${data1.getMonth() + 1}/${data1.getDate()}/${data1.getFullYear()}.`);

    } else if (Ano2_Eh_Maior(ano1, ano2)) {
        print(`
        A data mais recente é: ${data2.getMonth() + 1}/${data2.getDate()}/${data2.getFullYear()}.`);

    } else if (AnosIguais(ano1, ano2)) {
        if (Mes1_Eh_Maior(mes1, mes2)) {
            print(`
            A data mais recente é: ${data1.getMonth() + 1}/${data1.getDate()}/${data1.getFullYear()}.`);

        } else if (Mes2_Eh_Maior(mes1, mes2)) {
            print(`
            A data mais recente é: ${data2.getMonth() + 1}/${data2.getDate()}/${data2.getFullYear()}.`);

        } else if (MesesIguais(mes1, mes2)) {
            if (Dia1_Eh_Maior(dia1, dia2)) {
                print(`
                A data mais recente é: ${data1.getMonth() + 1}/${data1.getDate()}/${data1.getFullYear()}.`);

            } else if (Dia2_Eh_Maior(dia1, dia2)) {
                print(`
                A data mais recente é: ${data2.getMonth() + 1}/${data2.getDate()}/${data2.getFullYear()}.`);

            } else {
                print(`
                As datas são iguais.`);
            }
        }
    }
}

function Ano1_Eh_Maior(ano1, ano2) {
    return ano1 > ano2;
}

function Ano2_Eh_Maior(ano1, ano2) {
    return ano2 > ano1;
}

function AnosIguais(ano1, ano2) {
    return ano1 === ano2;
}

function MesesIguais(mes1, mes2) {
    return mes1 === mes2;
}

function Mes1_Eh_Maior(mes1, mes2) {
    return mes1 > mes2;
}

function Mes2_Eh_Maior(mes1, mes2) {
    return mes2 > mes1;
}

function Dia1_Eh_Maior(dia1, dia2) {
    return dia1 > dia2;
}

function Dia2_Eh_Maior(dia1, dia2) {
    return dia2 > dia1;
}

main();