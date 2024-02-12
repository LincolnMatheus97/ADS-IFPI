/*
Leia 3 números, calcule e escreva a média dos números.
*/

import {question} from "readline-sync";

//Entrada
const num1 = Number(question("Digite o primeiro numero: "))
const num2 = Number(question("Digite o segundo numero: "))
const num3 = Number(question("Digite o terceiro numero: "))

//Processamento
var media = (num1 + num2 + num3) / 3;

//Saída
console.log(`Dado os números ${num1}, ${num2}, ${num3}. A média desses números é igual á ${media.toFixed(2)}`);