/*
Leia o salário de um trabalhador e escreva seu novo salário com um aumento de 25%.
*/

import {question} from "readline-sync";

//Entrada
const salario = Number(question("Digite o valor de seu Salario: "));

//Processamento
const aum_sal = 0.25 * salario;
const sal_atual = salario + aum_sal;

//Saída
const mensagem = `
----------------------------------------
    Seja seu salario base igual á 
    ${salario}, seu novo salario
    com aumento de 25% será de 
    ${sal_atual.toFixed(2)}.
----------------------------------------`;
console.log(mensagem);