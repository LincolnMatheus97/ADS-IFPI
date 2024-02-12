/*
Leia um número inteiro de meses, calcule e escreva quantos anos e quantos meses ele corresponde.
*/

import {question} from "readline-sync";

//Entrada
const numms = Number(question("Digite um numero inteiro de meses: "));

//Processamento
const numa = Math.floor(numms / 12);
const meses = numms % 12;

//Saída
console.log(`
            Dado o numero inteiro de meses, sendo ${numms}. Temos que é
            equivalente á ${numa} anos e ${meses.toFixed(0)} meses.`);