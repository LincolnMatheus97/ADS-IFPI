/*
Leia um número inteiro de dias, calcule e escreva quantas semanas e quantos dias ele corresponde.
*/

import {question} from "readline-sync";

//Entrada
const numd = Number(question("Digite um numero inteiro de dias: "));

//Processamento
const nums = Math.floor(numd / 7);
const dias = numd % 7;

//Saída
const mensagem = `
__________________________________________________________________________

    Dada a quantidade de dias fornecido, sendo ${numd}.
    Temos que é correspondente á ${nums} semanas e 
    ${dias} dias.
__________________________________________________________________________`;

console.log(mensagem);