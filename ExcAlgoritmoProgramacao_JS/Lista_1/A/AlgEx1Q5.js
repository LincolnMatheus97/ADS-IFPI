/*
Leia um número inteiro (3 dígitos), calcule e escreva a soma de seus elementos (C + D + U).
*/

import {question} from "readline-sync";

//Entrada
const numero = Number(question("Digite um numero inteiro de 3 digitos: "))

//Processamento
const centena = Math.floor(numero / 100);
const resto = numero % 100;
const dezena = Math.floor(resto / 10);
const unidade = resto % 10;

const somatorio = centena + dezena + unidade;

//Saída
console.log(`Dado o número: ${numero}, a soma de ${centena} + ${dezena} + ${unidade} = ${somatorio}.`)