/*
Leia um número inteiro de minutos, calcule e escreva quantos dias, quantas horas e quantos minutos ele
corresponde.
*/
import {question} from "readline-sync";

//Entrada
const nummt = Number(question("Digite um numero inteiro de minutos: "));

//Processamento
const numd = Math.floor(nummt / 1440);
const resto = nummt % 1440;
const numh = Math.floor(resto / 60);
const minutos = nummt % 60;

//Saída
const mensagem = `
______________________________________________________________________________________

    Dado o numero inteiro em minutos, sendo ${nummt}. Temos que é
    equivalente á ${numd} dias , ${numh} horas e ${minutos.toFixed(2)} minutos.

______________________________________________________________________________________`;

console.log(mensagem);