/*
Uma determinada empresa armazena para cada funcionário uma ficha contendo o código, o número de 
horas trabalhadas e o seu nº de dependentes. Considerando que a empresa paga R$ 12,00 por hora e R$ 
40,00 por dependentes e que sobre o salário são feitos descontos de 8,5% para o INSS e 5% para IR. 
Escreva um algoritmo que leia o código, número de horas trabalhadas e número de dependentes de N 
funcionários. Após a leitura de cada ficha, escreva os valores descontados para cada imposto e o salário 
líquido do funcionário.
*/

import { get_number, print } from "../../utils/io_utils.js";

function main() {
    //Entrada
    const N = get_number(`Digite quantas fichas voce deseja: `);

    //Processamento e Saída
    let i = 1;
    let INSS;
    let IR;

    for (i; Ate_N(i, N); i++) {
        const codigo = get_number(`Digite o codigo do funcionario: `);
        const hora = get_number(`Digite quantas horas trabalhadas: `);
        const dependente = get_number(`Digite quantos dependentes possui: `);

        let salario_base = 12 * hora;
        let valor_dependentes = 40 * dependente;
        let salario_bruto = (salario_base + valor_dependentes);
        INSS = (8.5 * salario_bruto) / 100;
        IR = (5 * salario_bruto) / 100;
        let salario_liquido = ((salario_bruto - INSS) - IR);

        print(`
        -------------------------------------------------------------------------------------------
        ##################          FICHA DO FUNCIONARIO Cº:${codigo}           ##################
        
            SALARIO BRUTO ->                            R$: ${salario_bruto.toFixed(2)}
            HORAS TRABALHADAS ->                            ${hora} horas semanais.
            DEPENDENTES ->                              R$: ${valor_dependentes}
            (-)INSS ->                                  R$: ${INSS}
            (-)IR ->                                    R$: ${IR}
            ---------------------------------------------------------------------
            SALARIO LIQUIDO ->                          R$: ${(salario_liquido).toFixed(2)}
            
        `)
    }
}

function Ate_N(num1, num2) {
    return num1 <= num2;
}

main();