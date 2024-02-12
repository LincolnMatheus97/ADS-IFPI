/*
Leia uma velocidade em m/s, calcule e escreva esta velocidade em km/h. (Vkm/h = Vm/s * 3.6)
*/

import {question} from "readline-sync";

//Entrada
console.log("-----Conversor de Velocidade-----");
const Vms = question("Digite uma velocidade em m/s para ser convertida em km/h:");

//Processamento
const Vkm = Vms * 3.6;

//Saída
console.log(`A velocidade em M/s ${Vms} era essa, agora convertido para Km/h é: ${Vkm}.`)