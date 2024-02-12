/*
Leia um valor em real (R$), calcule e escreva 70% deste valor.
*/

import {question} from "readline-sync";

//Entrada
const valor = Number(question("Digite um valor em real(R$): "));

//Processamento
const valor_mod = (70 * valor) / 100;

//Saída
const mensagem = `
___________________________________________________    
    Dado o valor em real(R$) apresentado,
    sendo ele ${valor}, temos que 70% desse
    valor é igual á ${valor_mod.toFixed(2)}.
___________________________________________________`;

console.log(mensagem);