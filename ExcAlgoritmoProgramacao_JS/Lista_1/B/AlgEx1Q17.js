/*
Leia o valor da base e altura de um retângulo, calcule e escreva sua área. (área = base * altura).
*/

import {question} from "readline-sync";

//Entrada
const base = Number(question("Digite o valor da base do retangulo: "));
const altura = Number(question("Digite o valor da altura do retangulo: "));

//Processamento
const area = (base * altura);

//Saída
console.log(`Dado a base, e a altura do retangulo. Temos que a area é dada por A = (${base} * ${altura}), logo é igual á ${area}.`);