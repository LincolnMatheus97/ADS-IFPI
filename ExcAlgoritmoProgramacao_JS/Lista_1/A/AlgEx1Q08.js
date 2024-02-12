/*
Leia 2 números, calcule e escreva a divisão da soma pela subtração dos números lidos.
*/

import {question} from "readline-sync";

//Entrada
const n1 = Number(question("Digite um numero: "));
const n2 = Number(question("Digite um segundo numero: "));

//Processamento
const div = (n1+n2) / (n1-n2);

//Saída
const mensagem = `
-----------------------------------------------------
    Temos os números ${n1} e ${n2}, onde á
    divisão de (${n1} + ${n2}) por (${n1} - ${n2}) é
    igual á ${div.toFixed(2)}.
-----------------------------------------------------`;

console.log(mensagem);