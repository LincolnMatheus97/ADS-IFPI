/*
Determine a idade de uma pessoa, em anos, meses e dias, dadas a data (dia, mês e ano) do seu 
nascimento e a data (dia, mês e ano) atual.
*/

import { print, get_date } from "../utils/io_utils.js";

function main () {
	//Entrada
    print (`
    ----Digite abaixo as datas, com base no calendario americano, Ex: 11/03/1997 (Mes/Dia/Ano)------`);
    const dt_atual = get_date(`
    ----Data atual: `);
    const dt_nasc = get_date(`
    ----Data nascimento: `);
	
	//Processamento e Saída
	let ano1 = dt_atual.getFullYear();
    let mes1 = dt_atual.getMonth();
    let dia1 = dt_atual.getDate();
    let ano2 = dt_nasc.getFullYear();
    let mes2 = dt_nasc.getMonth();
    let dia2 = dt_nasc.getDate();

    let idadeanos = ano1 - ano2 ;
    let idademes = mes1 - mes2;
    let idadedias = dia1 - dia2;

    if (Aniversario_N_Aconteceu(mes1, dia1, mes2, dia2)) {
        idadeanos --;
        idademes += 12;
    }
    if (IdadeDiasNegativa(idadedias)) {
        const ultdiamesanterior = get_date(ano1, mes1, 0);
        idadedias += ultdiamesanterior.getDate();
        idademes --
    }
    print (`
    -----------------------------------------------------------------------------------------------------------
    
        Dado as datas fornecidas, onde e a data de nascimento é ${mes2 + 1}/${dia2}/${ano2} e a data atual 
        é ${mes1 + 1}/${dia1}/${ano1}. Podemos dizer que sua idade em anos, meses e dias é equivalente à 
        ${idadeanos} anos, ${idademes} meses e ${idadedias} dias.
    
    -----------------------------------------------------------------------------------------------------------`);
}

function Aniversario_N_Aconteceu(mes1, dia1, mes2, dia2) {
    return (mes1 < mes2 || (mes1 === mes2 && dia1 < dia2));
}

function IdadeDiasNegativa(idadedias) {
    return idadedias < 0;
}

main();
