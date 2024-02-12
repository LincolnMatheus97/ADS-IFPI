/*
Leia o valor do lado de um quadrado, calcule e escreva sua área. (área = lado²).
*/

import {question} from "readline-sync";

//Entrada
const lado = Number(question("Digite o valor do lado do quadrado: "));

//Processamento
const area = lado**2; //Para o exponencial colocamos ** e o numero.

//Saída
console.log(`Dado o lado do quadrado, sendo ${lado}. podemos escrever a Área igual á ${area}.`); 