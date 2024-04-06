import { get_number, percentual, print } from "../utils/io_utils.js";

function main() {                                                                                                                       // >LEGENDA FOR ME<
    const CURRENT_DATA = get_number(`Digite a leitura atual do contador de energia: `);                                                //CURRENT_DATA = leitura atual
    const PREVIOUS_DATA = get_number(`Digite a leitura anterior do contador de energia: `);                                           //PREVIOUS_DATA = leitura anterior
    const RATE_RED_FLAG = 8.00;                                                                                                      //RATE_RED_FLAG = valor da taxa bandeira vermelha

    let monthlyKwh = CURRENT_DATA - PREVIOUS_DATA;                                                                                 //monthlyKwh = kwh por mes
    let countRedFlag = 0;                                                                                                         //countRedFlag = quantida de bandeiras vermelhas
    let totalValueRedFlag = 0;                                                                                                   //totalValueRedFlag = valor total das bandeiras vermelhas
    let zeroRedFlag = monthlyKwh;                                                                                               //zeroRedFlag = ate nao ter mais bandeiras vermelhas

    while (zeroRedFlag >= 100) {
        totalValueRedFlag += RATE_RED_FLAG;
        countRedFlag++;
        zeroRedFlag -= 100;
    }

    let amountCharged = calculateAmount(monthlyKwh);                                                                   //amountCharged = valor cobrado
    let icms = percentual(amountCharged, 25);
    let pisConfis = percentual(amountCharged, 15);
    let streetLighting = 0;                                                                                         //streetLighting = iluminação publica

    if (monthlyKwh > 80) {
        streetLighting = percentual(amountCharged, 6);                                                           
    }

    let totalAmountPayable = amountCharged + icms + pisConfis + streetLighting + totalValueRedFlag;           //totalAmountPayable = valor total a pagar               

    print(`
    -----------------------------------------------------------------------------------
    *******************             TALÃO DE ENERGIA                *******************
    
    °DESCRIÇÃO
    -> Leitura Atual    --------------------------------------      ${CURRENT_DATA} Kwh
    -> Leitura Anterior --------------------------------------      ${PREVIOUS_DATA} Kwh
    -> Consumo  ----------------------------------------------      ${monthlyKwh}   Kwh
    -> Valor Faturado   --------------------------------------      R$:${totalAmountPayable.toFixed(2)}
    -> Bandeira Vermelha    ----------------------------------      R$:${totalValueRedFlag.toFixed(2)} (x${countRedFlag})
    -> ICMS --------------------------------------------------      R$:${icms.toFixed(2)}
    -> PIS/CONFIS   ------------------------------------------      R$:${pisConfis.toFixed(2)}
    -> Taxa de Iluminação   ----------------------------------      R$:${streetLighting.toFixed(2)}
    
    -----------------------------------------------------------------------------------`);
}

function calculateAmount(value) {
    let amount = 0;

    if (value <= 30) {
        amount = 0;
    } else if (value <= 100) {
        amount = (value - 30) * 0.59;
    } else {
        amount = (70 * 0.59) + ((value - 70) * 0.75);
    }

    return amount;
}

main();