/*
Leia 2 números inteiros, calcule e escreva o quociente e o resto da divisão do 1º pelo 2º.
*/

import {question} from "readline-sync";

//Entrada
const numero1 = question("Digite um numero inteiro de 3 digitos: ");

//Processamento
const n1 = numero1[0];
const n2 = numero1[1];
const n3 = numero1[2];

const numero2 = n3+n2+n1

//Saída
const mensagem = `
###########################################
    Dado o número inteiro ${numero1} o 
    inverso desse número é ${numero2}.
###########################################`;

console.log(mensagem);