/*
Leia um número inteiro de metros, calcule e escreva quantos Km e quantos metros ele corresponde.
*/

import {question} from "readline-sync";

//Entrada
const nummt = Number(question("Digite um numero inteiro em metros: "));

//Processamento
const numkm = Math.floor(nummt / 1000);
const metros = nummt % 1000;

//Saída
const mensagem = `
____________________________________________________________________
    
    O número inteiro fornecido em metros é igual á ${nummt},
    isso equivale á ${numkm} Km e ${metros.toFixed(2)} metros.
____________________________________________________________________`;

console.log(mensagem);