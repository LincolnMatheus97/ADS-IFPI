/*
Leia um valor em minutos, calcule e escreva o equivalente em horas e minutos.
*/

import {question} from "readline-sync";

//Entrada
const minutos = Number(question("Digite um valor em minutos: "));

//Processamento
const horas = Math.floor(minutos / 60);
const minutos_rt = minutos % 60;

//Saída
console.log(`Os minutos fornecidos foram ${minutos}, isso em horas e minutos é equivalente á ${horas}:${minutos_rt}.`);
