/*
Leia o valor do raio de uma circunferência, calcule e escreva seu comprimento.(c = 2 * p * r)
*/

import {question} from "readline-sync";

//Entrada
 const raio = Number(question("Digite o raio da circunferencia: "));

//Processamento
const Pi = 3.14;
const comprimento = (2 * Pi * raio);

//Saída
console.log(`Dado a circunferencia, podemos determinar seu comprimento. Sendo assim C = (2 * Pi * Raio), ou seja, C = (2 * ${Pi} * ${raio}),
            assim C = ${comprimento}.`);