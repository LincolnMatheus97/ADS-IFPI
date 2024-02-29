/*
As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e lhe 
contrataram para desenvolver o programa que calculará os reajustes. Escreva um algoritmo que leia o 
salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:
o salários até R$ 280,00 (incluindo) : aumento de 20%
o salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
o salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
o salários de R$ 1500,00 em diante : aumento de 5% Após o aumento ser realizado, informe na tela:
· o salário antes do reajuste;
· o percentual de aumento aplicado;
· o valor do aumento;
· o novo salário, após o aumento.
*/

import { get_number, print } from "../../utils/io_utils.js";

function main() {
    //Entrada
    let salario = get_number(`
    --- Digite seu o valor salario:`);

    //Processamento e Saída
    let percentual_Aumento;
    let valor_aumento;
    let novo_salario;

    if (Salario_EhAte_280(salario)) {
        percentual_Aumento = 20;
        valor_aumento = salario * (0.2);
        novo_salario = salario + valor_aumento;

    } else if (Salario_Entre_280_e_700(salario)) {
        percentual_Aumento = 15;
        valor_aumento = salario * (0.15);
        novo_salario = salario + valor_aumento;

    } else if (Salario_Entre_700_e_1500(salario)) {
        percentual_Aumento = 10;
        valor_aumento = salario * (0.1);
        novo_salario = salario + valor_aumento;

    } else if (Salario_EhMaior_1500(salario)) {
        percentual_Aumento = 5;
        valor_aumento = salario * (0.05);
        novo_salario = salario + valor_aumento;
    }

    print(`
        ---------------------------------------------------------------------------------------------
        · O salário antes do reajuste       --> R$: ${salario}
        · O percentual de aumento aplicado  --> ${percentual_Aumento}%
        · O valor do aumento                --> R$: ${valor_aumento.toFixed(2)}
        · O novo salário, após o aumento    --> R$: ${novo_salario.toFixed(2)}                       
        ---------------------------------------------------------------------------------------------`);
}

function Salario_EhAte_280(salario) {
    return (salario > 0 && salario <= 280);
}

function Salario_Entre_280_e_700(salario) {
    return (salario > 280 && salario <= 700);
}

function Salario_Entre_700_e_1500(salario) {
    return (salario > 700 && salario <= 1500);
}

function Salario_EhMaior_1500(salario) {
    return salario > 1500;
}

main();