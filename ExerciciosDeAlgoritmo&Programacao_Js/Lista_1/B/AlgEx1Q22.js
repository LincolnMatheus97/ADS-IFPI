/*
Leia um valor em km, calcule e escreva o equivalente em m.
*/

import {question} from "readline-sync";

//Entrada
const Vkm = Number(question("Digite um valor em Km: "));

//Processamento
const Vm = Vkm * 1000;

//Saída
console.log(`Dado o valor em Km, sendo ${Vkm}. O equivalente em M é igual á ${Vm.toFixed(2)}`);