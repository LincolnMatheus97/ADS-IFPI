import { get_number, get_text, porcentagem, print } from "../utils/io_utils.js";

function main() {                                                                                    // >LEGENDA FOR ME<
    let name = get_text(`Digite o nome do cliente: `);                                              //name = nome
    let purchaseValue = get_number(`Digite o valor da compra: `);                                  //purchaseValue = valor de compra
    let totalCashBack = 0;                                                                        //totalCashBack = total em cashback
    let smallerCashBack = Infinity;                                                              //smallerCashBack = menor valor de cashback
    let biggerCashBack = 0;                                                                     //biggerCashBack = maior valor de cashback
    let sumSales = 0;                                                                          //sumSales = soma de vendas
    let countCashBack = 0;                                                                    //countCashBack = quantidade de cashback

    while (purchaseValue !== 0) {
        sumSales += purchaseValue;
        let cashBack = calculateCashBack(purchaseValue);
        totalCashBack += cashBack;
        countCashBack++;

        if (cashBack > biggerCashBack) {
            biggerCashBack = cashBack;
        }
        if (cashBack < smallerCashBack) {
            smallerCashBack = cashBack;
        }

        name = get_number(`Digite o nome do cliente: `);
        purchaseValue = get_number(`Digite o valor da compra: `);
    }

    let avarageCashBack = totalCashBack / countCashBack;                                //avarageCashBack = valor media de cashback
    let cashBackPercentage = porcentagem(totalCashBack, sumSales);                     //cashBackPercentage = percentual em cashback

    print(`
    -------------------------------------------------------------------------------------
                                    RECEITA LOJA                                    
    
    -> Faturamento Total    -----------------------------------     R$:${sumSales.toFixed(2)}
    -> Valor Distribuído em CashBack    -----------------------     R$:${totalCashBack.toFixed(2)}
    -> Percentual Investido pela Loja em CashBack   -----------     ${cashBackPercentage.toFixed(2)}%
    -> O Maior CashBack Distribuído ---------------------------     ${biggerCashBack}
    -> O Menor CashBack Distribuído ---------------------------     ${smallerCashBack}
    -> A Média de CashBack  -----------------------------------     ${avarageCashBack.toFixed(2)}
    
    -------------------------------------------------------------------------------------`);

}

function calculateCashBack(value) {
    let cashBack = 0;

    if (value <= 250) {
        cashBack = value * 0.05;
    } else if (value <= 500) {
        cashBack = (value - 250) * 0.07;
    } else if (value <= 750) {
        cashBack = (250 * 0.07) + ((value - 500) * 0.08);
    } else {
        cashBack = (250 * 0.07) + (250 * 0.08) + ((value - 750) * 0.25);
    }

    return cashBack
}

main();