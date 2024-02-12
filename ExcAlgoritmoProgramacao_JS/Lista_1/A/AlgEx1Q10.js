/*
Leia 2 números inteiros, calcule e escreva o quociente e o resto da divisão do 1º pelo 2º.
*/

import {question} from "readline-sync";

//Entrada
const n1 = Number(question("Digite um numero inteiro: "));
const n2 = Number(question("Digite um segundo numero inteiro: "));

//Processamento
const quoc = n1 / n2;
const rest = n1 % n2;

//Saída
const mensagem = `
----------------------------------------------
    Dados os números ${n1} e ${n2}, temos
    que o quociente da divisão de ${n1} e
    ${n2} é igual á ${quoc.toFixed(1)}, e o resto é
    ${rest}.
----------------------------------------------`;
console.log(mensagem);