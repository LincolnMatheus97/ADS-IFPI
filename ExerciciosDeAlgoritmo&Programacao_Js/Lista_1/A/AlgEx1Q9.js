/*
Leia 2 números (A, B) e escreva-os em ordem inversa (B, A).
*/

import {question} from "readline-sync";

//Entrada
const par = question("Digite dois numeros separados por uma virgula:"); //Não transformei em numeral, para que possa usar o .split.

//Processamento

const numeros = par.split(","); //Aqui usei um .split onde divido a string por um separador especifico.
const nA = numeros[0];
const nB = numeros[1];

//Saída
const mensagem = `
-----------------------------------------------
    Dado os números (${nA}, ${nB}) a ordem 
    inversa dos números é (${nB}, ${nA}).
-----------------------------------------------`;
console.log(mensagem);