/*
A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e 
número de filhos. Escreva um algoritmo que leia o salário e o número de filhos de N habitantes e 
escreva: 
a) média de salário da população; 
b) média de número de filhos; 
c) percentual de pessoas com salário de até R$ 1.000,00. 
*/

import { get_number, print } from "../utils/io_utils.js";

function main() {
    //Entrada
    const N = get_number(`Digite o numero de habitantes pesquisados: `);

    //Processamento
    let i = 1;
    let somatorio_salario = 0;
    let somatorio_filho = 0;
    let salario_1000 = 0;
    let media_salario;
    let media_filho;

    for (i; Ate_N(i, N); i++) {
        const salario = get_number(`Habitante ${i}, digite seu salario: `);
        const filho = get_number(`Habitante ${i}, digite quantos filhos voce tem: `);

        somatorio_salario += salario;
        somatorio_filho += filho;

        if (Eh_Ate_1000(salario)) {
            salario_1000 += 1;
        }
    }
    media_salario = somatorio_salario / N;
    media_filho = somatorio_filho / N;
    let percentual = (salario_1000 / N) * 100;

    //Saída
    print(`
    ------------------------------------------------------------------------------------------
        A Média de salário da populção ->                   R$: ${media_salario.toFixed(2)},
        A Média de Filhos é ->                                  ${media_filho}, filho(s) por habitante,
        O Percentual com Salário Até R$:1000 ->                 ${percentual}% .
    ------------------------------------------------------------------------------------------`)
}

function Ate_N(num1, num2) {
    return num1 <= num2;
}

function Eh_Ate_1000(num1) {
    return num1 <= 1000;
}

main();