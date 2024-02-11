/*
Leia uma temperatura em °C, calcule e escreva a equivalente em °F. (t°F = (9 * t°C + 160) / 5).
*/

import {question} from "readline-sync";

//Entrada
const tempC = Number(question("Digite a temperatura em Celsius: "));

//Processamento
const tempF = (9 * tempC + 160) / 5;

//Saída
console.log(`Dada a temperatura fornecida em °C, podemos escrever em °F onde:
            t°F = (9 * t°C +160)/5 , sendo t°F = (9 * ${tempC} + 160)/5, assim
            t°F = ${tempF}.`);