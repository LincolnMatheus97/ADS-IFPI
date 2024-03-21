/*
Escreva um algoritmo que calcula o retorno de um investimento financeiro. O usuário deve informar 
quanto será investido por mês e qual será a taxa de juros mensal. O algoritmo deve informar o saldo  do 
investimento após um ano (soma das aplicações mensais + juros compostos), e perguntar ao usuário se 
deseja calcular o ano seguinte, sucessivamente. Por exemplo, caso o usuário deseje investir R$ 100,00 
por mês, e tenha uma taxa de juros de 1% ao mês, o algoritmo forneceria a seguinte saída: 
Saldo do investimento após 1 ano: 1268.25 
Deseja processar mais um ano (S/N) ?
*/

import { get_positive_number, get_text, percentual, print } from "../../utils/io_utils.js";

function main() {
    const investimento_mes = get_positive_number(`Digite quanto deseja investir mensalmente: `);
    const juros_mes = get_positive_number(`Digite o valor da taxa mensal de juros mensal: `);

    let saldo_investimento = 0;
    let contador_anos = 1;

    while (true) {

        saldo_investimento += Calcular_SaldoInvestimento(investimento_mes, juros_mes);
        print(`
        -----------------------------------------------------------------
                            INVESTIMENTO FINANCEIRO
        ---> Investimento Mensal    --------------------------  R$:${investimento_mes}
        ---> Taxa de Juros Mensal   --------------------------  ${juros_mes} %
        
        ---> Saldo do Investimento ápos ${contador_anos} ano(s) R$:${saldo_investimento.toFixed(2)}
        
        -----------------------------------------------------------------`);

        let processamento = get_text(`Deseja processar mais um ano S/N: `).toUpperCase();

        if (processamento === `N`) {
            break;
        }

        contador_anos++;
    }
}

function Calcular_SaldoInvestimento(investimento_mes, juros_mes) {
    const mes_final = 12;
    let mes_inicio = 1;
    let saldo_anual = 0

    while (mes_inicio <= mes_final) {
        saldo_anual += investimento_mes;
        saldo_anual *= (1 + juros_mes / 100);

        mes_inicio ++
    }

    return saldo_anual;
}

main();