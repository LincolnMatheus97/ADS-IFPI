/*
Leia um número inteiro de horas, calcule e escreva quantas semanas, quantos dias e quantas horas ele
corresponde.
*/

import {question} from "readline-sync";

//Entrada
const numh = Number(question("Digite um numero inteiro de horas: "));

//Processamento
const nums = Math.floor(numh / 168);
const resto = numh % 168;
const numd = Math.floor(resto / 24);
const horas = numh % 24;

//Saída
const mensagem = `
______________________________________________________________________________________

    Dado um numero inteiro em horas, sendo ${numh}. Temos que isso é
    equivalente á ${nums} semanas e ${numd} dias e ${horas.toFixed(2)} horas.
    
______________________________________________________________________________________`;

console.log(mensagem);