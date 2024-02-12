/*
Leia uma temperatura em °F, calcule e escreva a equivalente em °C. (t°C = (5 * t°F - 160) / 9).
*/

import {question} from "readline-sync";

//Entrada
const Temf = Number(question("Digite o valor da temperatura em F: "));

//Processamento
const Temc = (5 * Temf - 160) / 9;

//Saída
console.log(`O valor da temperatura em °F, sendo ${Temf}.
            O equivalente em °C, dada a formula: 
            t°C = (5 * t°F - 160) / 9, onde
            t°C = (5 * ${Temf} - 160) / 9 , assim
            t°C = ${Temc.toFixed(2)}.`);