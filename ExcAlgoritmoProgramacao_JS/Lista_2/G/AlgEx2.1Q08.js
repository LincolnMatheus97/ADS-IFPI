/*
Para o cálculo de uma folha de pagamento, sabendo que os descontos são do Imposto de Renda, que 
depende do salário bruto (conforme tabela abaixo) e 3% para o Sindicato e que o FGTS corresponde a 
11% do salário bruto, mas não é descontado (é a empresa que deposita). O salário líquido corresponde 
ao salário bruto menos os descontos. O programa deverá pedir ao usuário o valor da sua hora e a 
quantidade de horas trabalhadas no mês.
Desconto do IR:
o Salário Bruto até R$ 900,00 (inclusive) - isento
o Salário Bruto até R$ 1.500,00 (inclusive) - desconto de 5%
o Salário Bruto até R$ 2.500,00 (inclusive) - desconto de 10%
o Salário Bruto acima de R$ 2.500,00 - desconto de 20%
Escreva na tela as informações, dispostas conforme o exemplo abaixo. No exemplo o valor da hora é 5 e 
a quantidade de hora é 220.
*/

import { get_number, print } from "../../utils/io_utils.js";

function main() {
    //Entrada
    const valor = get_number(`
    --> Digite o valor(R$) da sua hora de servico: `);
    const hora = get_number(`
    --> Digite quantas horas foram trabalhadas no mes: `);

    //Processamento e Saída
    let salario_bruto = valor * hora;
    let IR;
    let IR_Real;
    let INSS;
    let FGTS;
    let descontos_totais;
    let salario_liquido;

    if (Salario_EhAte_900(salario_bruto)) {
        IR = `Insento`;
        IR_Real = 0;
        INSS = (3 * salario_bruto) / 100;
        FGTS = (11 * salario_bruto) / 100;
        descontos_totais = INSS;
        salario_liquido = salario_bruto - INSS;

    } else if (Salario_Entre_900_e_1500(salario_bruto)) {
        IR = 5;
        IR_Real = (5 * salario_bruto) / 100;
        INSS = (3 * salario_bruto) / 100;
        FGTS = (11 * salario_bruto) / 100;
        descontos_totais = (IR_Real + INSS);
        salario_liquido = salario_bruto - (IR_Real + INSS);

    } else if (Salario_Entre_1500_e_2500(salario_bruto)) {
        IR = 10;
        IR_Real = (10 * salario_bruto) / 100;
        INSS = (3 * salario_bruto) / 100;
        FGTS = (11 * salario_bruto) / 100;
        descontos_totais = (IR_Real + INSS);
        salario_liquido = salario_bruto - (IR_Real + INSS);

    } else {
        IR = 20;
        IR_Real = (20 * salario_bruto) / 100;
        INSS = (3 * salario_bruto) / 100;
        FGTS = (11 * salario_bruto) / 100;
        descontos_totais = (IR_Real + INSS);
        salario_liquido = salario_bruto - (IR_Real + INSS);

    }
    print(`
    ------------------------------------------------------------------------------------------------
    Salário Bruto               --> R$: ${salario_bruto.toFixed(2)}
    (-) IR (${IR}%)                --> R$: ${IR_Real.toFixed(2)}
    (-) INSS (3%)               --> R$: ${INSS.toFixed(2)} 
    FGTS (11%)                  --> R$: ${FGTS.toFixed(2)}  
    Total de descontos          --> R$: ${descontos_totais.toFixed(2)}  
    Salário Liquido             --> R$: ${salario_liquido.toFixed(2)}
    -----------------------------------------------------------------------------------------------`);
}

function Salario_EhAte_900(salario) {
    return (salario > 0 && salario <= 900);
}

function Salario_Entre_900_e_1500(salario) {
    return (salario > 900 && salario <= 1500);
}

function Salario_Entre_1500_e_2500(salario) {
    return (salario > 1500 && salario <= 2500);
}

main();