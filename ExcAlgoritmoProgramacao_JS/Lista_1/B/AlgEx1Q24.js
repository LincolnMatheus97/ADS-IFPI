/*
Leia um valor em m, calcule e escreva o equivalente em cm.
*/

import {question} from "readline-sync";

//Entrada
const Vm = Number(question("Digite um valor em m(Metros): "));

//Processamento
const Vcm = Vm * 100;

//Saída
console.log(`Dado o valor em Metros, sendo ${Vm}. Temos que o equivalente em Centimetros é igual á ${Vcm.toFixed(2)}`);