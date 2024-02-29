/*
Um posto está vendendo combustíveis com a seguinte tabela de descontos:
1. Álcool:
· até 20 litros, desconto de 3% por litro
· acima de 20 litros, desconto de 5% por litro
2. Gasolina:
· até 20 litros, desconto de 4% por litro
· acima de 20 litros, desconto de 6% por litro.
Escreva um algoritmo que leia o número de litros vendidos, o tipo de combustível (codificado da
seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se que
o preço do litro da gasolina é R$ 2,50 o preço do litro do álcool é R$ 1,90.
*/

import { question } from "readline-sync";
import { get_positive_number, print } from "../../utils/io_utils.js"

function main() {
    //Entrada
    const litros = get_positive_number(`
    ---> Digite quantos litros foram vendidos: `);
    const tipo = question(`
    ---> Digite o tipo de combustivel vendido (A-alcool, G-gasolina): `).toUpperCase();

    //Processamento
    let gasolina = 2.50;
    let alcool = 1.90;
    let cobranca;
    let desconto;
    let combustivel;

    if (Eh_Valido(tipo)) {
        if (Eh_Alcool(tipo)) {
            if (Litros_Ate_20(litros)) {
                cobranca = litros * alcool;
                desconto = valordesconto(litros, tipo, alcool);
                combustivel = `Álcool`;

            } else {
                cobranca = litros * alcool;
                desconto = valordesconto(litros, tipo, alcool);
                combustivel = `Álcool`;
            }
        } else {
            if (Litros_Ate_20(litros)) {
                cobranca = litros * gasolina;
                desconto = valordesconto(litros, tipo, gasolina);
                combustivel = `Gasolina`;

            } else {
                cobranca = litros * gasolina;
                desconto = valordesconto(litros, tipo, gasolina);
                combustivel = `Gasolina`;
            }
        }
        print(`
            -----------------------------------------------------------------
                    ###### RECIBO DE PAGAMENTO ######

            ----> Tipo de Combustível:      ${combustivel},
            ----> Litros de Combustível:    ${litros},
            ----> Valor a ser Pago:         ${cobranca},
            ----> Desconto:                 ${desconto},
            ________________________________________________________________
            ----> Valor total à ser Pago:   ${cobranca - desconto}.
            
            -----------------------------------------------------------------`)
    } else {
        print(`
        -> Tipo Inválido, dígite o tipo válido do combústivel. `);
    }

}

function Eh_Valido(tipo) {
    return (tipo === `A` || tipo === `G`);
}

function Eh_Alcool(tipo) {
    return (tipo === `A`);
}

function Litros_Ate_20(litros) {
    return (litros > 0 && litros <= 20);
}

function valordesconto(litros, tipo, alcool, gasolina) {
    let desconto;
    if (Eh_Alcool(tipo)) {
        if (Litros_Ate_20(litros)) {
            desconto = litros * ((3 * alcool) / 100);
            return desconto;
        } else {
            desconto = litros * ((5 * alcool) / 100);
            return desconto;
        }
    } else {
        if (Litros_Ate_20(litros)) {
            desconto = litros * ((4 * gasolina) / 100);
            return desconto;
        } else {
            desconto = litros * ((6 * gasolina) / 100);
            return desconto;
        }
    }
}

main();