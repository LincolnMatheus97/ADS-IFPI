/*
Leia o valor do dólar e um valor em dólar, calcule e escreva o equivalente em real (R$).
*/

import {question} from "readline-sync";

//Entrada
const cota_dolar = Number(question("Qual o valor da cotação do Dolar hoje ?: "));
const dolar = Number(question("Digite um valor em Dolar: "));

//Processamento
const real = cota_dolar * dolar;

//Saída
console.log(`De acordo com a cotação do Dolar ${cota_dolar} e o valor digitado ${dolar},
            temos o equivalente em Reais: R$ ${real.toFixed(2)}`);