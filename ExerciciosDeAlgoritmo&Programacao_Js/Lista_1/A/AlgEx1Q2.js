/*
Leia um valor em horas e um valor em minutos, calcule e escreva o equivalente em minutos.
*/

import {question} from 'readline-sync';

//Entrada
const hora = Number(question('Digite uma hora: '));
const minuto = Number(question('Digite os minutos: '));

//Processamento
const transfor = hora * 60;
const minuto_t = transfor + minuto;

//Saída
console.log(`As horas e os minutos fornecidos foram ${hora}:${minuto}, isso é equivalentes a ${minuto_t} minutos!`)