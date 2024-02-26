/*
Leia uma data (dia, mês e ano), verifique e escreva se a data é ou não válida.
*/

import { question } from "readline-sync";
import { print } from "../utils/io_utils.js";

function main() {
    //Entrada
    print(`
    ----Digite abaixo a data, com base no nosso calendario, Ex: 03/11/1997 (Dia/Mes/Ano)------`);
    const data = question(`
    ----Digite uma data: `);

    //Processamento e Saída
    let data1 = data.split("/");
    let dt_dia = parseInt(data1[0]);
    let dt_mes = parseInt(data1[1]);
    let dt_ano = parseInt(data1[2]);

    if (datavalidade(dt_dia, dt_mes, dt_ano)) {
        print(`
            ----------------------------------------------------------------------------------------
            
                A data fornecida, sendo ${dt_dia}/${dt_mes}/${dt_ano}.
                É considerada uma data válida.
                
            ----------------------------------------------------------------------------------------`);
    } else {
        print(`
            ----------------------------------------------------------------------------------------
            
                A data fornecida, sendo ${dt_dia}/${dt_mes}/${dt_ano}.
                É considerada uma data não válida.
                
            ----------------------------------------------------------------------------------------`);
    }
}

function datavalidade(dt_dia, dt_mes, dt_ano) {
    if (dt_mes < 1 && dt_mes > 12) {
        return false;
    }
    const diasmes = diasNoMes(dt_mes, dt_ano);
    if (dt_dia < 1 || dt_dia > diasmes) {
        return false;
    }
    return true;
}

function diasNoMes(dt_mes, dt_ano) {
    if (dt_mes === 2) {
        return ano_bissexto(dt_ano) ? 29 : 28;
    } else {
        return (dt_mes === 4 || dt_mes === 6 || dt_mes === 9 || dt_mes === 11) ? 30 : 31;
    }
}

function ano_bissexto(dt_ano) {
    return (dt_ano % 4 === 0 && (dt_ano % 100 !== 0 || dt_ano % 400 === 0));
}

main();