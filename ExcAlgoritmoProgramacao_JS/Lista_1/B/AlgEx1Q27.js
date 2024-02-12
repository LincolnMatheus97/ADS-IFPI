/*
Leia um número inteiro de segundos, calcule e escreva quantas horas, quantos minutos e quantos
segundos ele corresponde.
*/

import {question} from "readline-sync";

//Entrada
const nums = Number(question("Digite um numero inteiro de segundos: "));

//Processamento
const numh = Math.floor(nums / 3600);
const resto = nums % 3600
const numm = Math.floor(resto / 60);
const seg = nums % 60;

//Saída
const mensagem = `
________________________________________________________________________________

    Dado o numero inteiro de segundos, sendo ${nums}. Temos que é
    equivalente á ${numh} horas e ${numm} minutos e ${seg.toFixed(2)} segundos.

________________________________________________________________________________`;

console.log(mensagem);