/*
Leia um número inteiro (3 dígitos), calcule e escreva a soma do número com seu inverso.
(Ex.: número = 532 ; inverso = 235 ; soma = 532 + 235 = 767)
*/

import {question} from "readline-sync";

//Entrada
const numit = question ("Digite um numero de (3 digitos): ");

//Processamento
var n1 = parseInt(numit[0]); //Convertemos com parseInt a string anteriormente para numero inteiro.
var n2 = parseInt(numit[1]);
var n3 = parseInt(numit[2]);

const numiv = n3*100 + n2*10 + n1; //Multipliquei cada numero pela potencia de 10.
const soma = parseInt(numit) + numiv;

//Saída
console.log(`Número = ${numit}, inverso = ${numiv}, Soma = ${numit} + ${numiv} = ${soma}.`);