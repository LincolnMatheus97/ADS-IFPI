import { get_number, get_text, percentual, print } from "../utils/io_utils.js";

function main() {
    let poolDimensions = get_text(`\nDigite as dimensoes em (cm) da sua piscina, separando por virgula cada, ou seja, (Largura,Comprimento,Profundidade): `);        // >LEGENDA FOR ME< 
                                                                                                                                                                    //poolDimensions = dimensões da piscina
    let dimensions = poolDimensions.split(`,`);                                                                                                                    //dimensions = dimensões
    let width = parseFloat(dimensions[0]);                                                                                                                        //width = largura
    let length = parseFloat(dimensions[1]);                                                                                                                      //length = comprimento
    let depth = parseFloat(dimensions[2]);                                                                                                                      //depth = profundidade

    let poolCapacity = width * length * depth;                                                                                                                //poolCapacity = capacidade da piscina
    let maxCapacity = percentual(poolCapacity, 85);                                                                                                          //maxCapacity = capacidade max recomendada para encher

    let capacityInLiters = maxCapacity / 1_000;                                                                                                            //capacityInLiters = capacidade em litros

    const AMOUNT_PAID_IN_LITERS = get_number(`Digite quanto voce paga por cada 1000 litros de agua para a companhia: `);                                 //AMOUNT_PAID_IN_LITERS = valor pago em litros
    let amountToPay = calculateToPay(capacityInLiters, AMOUNT_PAID_IN_LITERS);                                                                          //amountToPay = valor a pagar

    let supplementPerMonth = percentual(capacityInLiters, 10);                                                                                        //supplementPerMonth = suplemento por mes                                                             
    let amountToPayForMonth = calculateToPay(supplementPerMonth, AMOUNT_PAID_IN_LITERS);                                                             //amountToPayForMonth = valor a pagar pelo suplemento do mes

    print(`
    ---------------------------------------------------------------------------------
    >>>>>>>>>>>>>>>>>>>>>           RELATÓRIO PISCINA           >>>>>>>>>>>>>>>>>>>>>
    
    -> Capacidade da Piscina em (cm³)   -----------------------     ${poolCapacity.toFixed(2)}
    -> Capacidade Máx Recomendada para não Transbordar em L----     ${capacityInLiters.toFixed(2)}
    -> Valor Pago à cada 1000 Litros    -----------------------     R$:${AMOUNT_PAID_IN_LITERS}
    -> Valor à ser Pago na Capacidade Máxima da Piscina -------     R$:${amountToPay.toFixed(2)}
    -> Valor à ser Pago Mensalmente para Manter Piscina -------     R$:${amountToPayForMonth.toFixed(2)}
    
    --------------------------------------------------------------------------------`);
}

function calculateToPay(value, rate) {
    let total = 0;
    let untilYouReach = 0;                                                                                                          //untilYouReach = ate atingir

    while (untilYouReach <= value) {
        total += rate;
        untilYouReach += 1_000;
    }

    return total
}

main();