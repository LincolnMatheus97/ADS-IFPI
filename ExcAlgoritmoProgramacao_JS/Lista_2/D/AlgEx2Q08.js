/*
Leia data atual (dia, mês e ano) e data de nascimento (dia, mês e ano) de uma pessoa, calcule e escreva
sua idade exata (em anos).
*/

import { get_date, print } from "../utils/io_utils.js";

function main() {
    //Entrada
    print(`
    ----Digite abaixo as datas, com base no calendario americano, Ex: 11/03/1997 (Mes/Dia/Ano)------`);
    const dt_atual = get_date(`
    ----Data atual: `);
    const dt_nasc = get_date(`
    ----Data nascimento: `);

    //Processamento e Saída
    let idade = dt_atual.getFullYear() - dt_nasc.getFullYear();

    if (aniversario_N_aconteceu(dt_atual, dt_nasc)) {
        idade--;
    }
    print(`
        ---------------------------------------------------------------------------------------------------------------------------

        Dado as datas fornecidas, onde a data atual é ${dt_atual.getMonth() + 1}/${dt_atual.getDate()}/${dt_atual.getFullYear()} 
        e a data de nascimento é ${dt_nasc.getMonth() + 1}/${dt_nasc.getDate()}/${dt_nasc.getFullYear()}. 
        Podemos dizer que sua idade em anos é equivalente á ${idade} anos.
        
        ---------------------------------------------------------------------------------------------------------------------------`)
}

function aniversario_N_aconteceu(dt_atual, dt_nasc) {

    const mes_at = dt_atual.getMonth();
    const dia_at = dt_atual.getDate();
    const mes_nas = dt_nasc.getMonth();
    const dia_nas = dt_nasc.getDate();

    return (mes_at < mes_nas || (mes_at === mes_nas && dia_at < dia_nas));
}

main();