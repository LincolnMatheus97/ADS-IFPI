/*
Leia 3 números, calcule e escreva a soma dos 2 primeiros e a diferença entre os 2 últimos.
*/

import {question} from "readline-sync";

//Entrada
const n1 = Number(question("Digite um número: "));
const n2 = Number(question("Digite um segundo número: "));
const n3 = Number(question("Digite um  terceiro número: "));

//Processamento
const soma = n1 + n2;
const sub = n2 - n3;

//Saída
const mensagem = `
-----------------------------------------------------------
    Os Três números fornecidos foram
    ${n1}, ${n2} e ${n3}. Logo á
    Soma dos dois primeiros é ${n1} + ${n2} = ${soma} e á
    Subtração dos dois últimos é ${n2} - ${n3} = ${sub}.
-----------------------------------------------------------`;
console.log(mensagem);

