/*
Leia o valor do raio de uma esfera, calcule e escreva seu volume. (v = (4 * p * r³) / 3) (p = 3,14)
*/

import {question} from "readline-sync";

//Entrada
const raio = Number(question("Digite o raio da sua esfera: "));

//Processamento
const Pi = 3.14;
const volume = (4 * Pi * raio**3) / 3;

//Saída
console.log(`Dada uma esfera, podemos escrever seu volume. Onde:
            V = (4 * Pi * Raio³)/3 -> V = (4 * ${Pi} * ${raio}³)/3 =
            V = ${volume}.`); 