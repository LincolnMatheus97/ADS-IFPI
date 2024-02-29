/*
Uma fruteira está vendendo frutas com a seguinte tabela de preços:
    Até 5 Kg                        Acima de 5 Kg
    Morango R$ 2,50 por Kg          R$ 2,20 por Kg
    Maçã R$ 1,80 por Kg             R$ 1,50 por Kg
Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá
ainda um desconto de 10% sobre este total. Escreva um algoritmo para ler a quantidade (em Kg) de
morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente.
*/

import { get_positive_number, print } from "../../utils/io_utils.js";

function main() {
    //Entrada
    const morango_kg = get_positive_number(`
    ----> Digite a quantidade em (Kg) de morangos: `);
    const maca_kg = get_positive_number(`
    ----> Digite a quantidade em (Kg) de macas: `);

    //Processamento
    let valor_total;
    let valor;
    let kg_total;
    let desconto;
    let morango;
    let maca;
    let valordomorango;
    let valordamaca;

    if (Compras_Ate_5kg(morango_kg, maca_kg)) {
        valordomorango = 2.5;
        valordamaca = 1.8;
        morango = valor_morango(morango_kg, valordomorango);
        maca = valor_maca(maca_kg, valordamaca);
        valor_total = morango + maca;
        kg_total = morango_kg + maca_kg;

    } else {
        valordomorango = 2.2;
        valordamaca = 1.5;
        morango = valor_morango(morango_kg, valordomorango);
        maca = valor_maca(maca_kg, valordamaca);
        valor_total = morango + maca;
        kg_total = morango_kg + maca_kg;
    }

    if (Compras_Maior_8kg_ou_Maior_25r$(valor_total, kg_total)) {
        desconto = (10 * valor_total) / 100;

    } else {
        desconto = 0;
    }

    //Saída
    print(`
    ---------------------------------------------------------------------------------
    #########       NOTA FISCAL         #########
    
    --> Kilos de Maçã:                  Kg: ${maca_kg}
    --> Valor(Kg) da Maçã:              R$: ${valor}
    --> Kilos de Morango:               Kg: ${morango_kg}
    --> Valor(Kg) do Morango:           R$: ${valor}
    ________________________________________________________
    --> Kilos Totais:                   Kg: ${kg_total}
    --> Desconto:                       R$: ${desconto}
    --> Valor Total à ser Pago:         R$: ${(valor_total - desconto).toFixed(2)}
    
    ---------------------------------------------------------------------------------`);
}

function Compras_Ate_5kg(maca_kg, morango_kg) {
    return (maca_kg + morango_kg <= 5);
}

function valor_maca(maca_kg, valordamaca) {
    let maca_1 = maca_kg * valordamaca;
    return maca_1;
}

function valor_morango(morango_kg, valordomorango) {
    let morango_1 = morango_kg * valordomorango;
    return morango_1;
}

function Compras_Maior_8kg_ou_Maior_25r$(valor_total, kg_total) {
    return (kg_total > 8 || valor_total > 25);
}

main();