/*
Leia uma velocidade em km/h, calcule e escreva esta velocidade em m/s. (Vm/s = Vkm/h / 3.6)
*/

import {question} from "readline-sync";

//Entrada
const Vkm = Number(question("Digite uma velocidade: "));

//Processamento
const Vms = Vkm / 3.6;

//Saída
console.log(`A velocidade ${Vkm} em M/s é equivalente á ${Vms.toFixed(2)}.`);