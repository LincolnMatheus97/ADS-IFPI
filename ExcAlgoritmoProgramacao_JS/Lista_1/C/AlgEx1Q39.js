/*
Leia três números inteiros e positivos (A, B, C) e calcule a seguinte expressão: D = (R + S) / 2, onde R = (A + B)² e S = (B + C)².
*/

import { question } from "readline-sync";

//Entrada
const conjn = question("Digite tres numeros inteiros separados por virgulas: ");

//Processamento
var numeros = conjn.split(",");
var A = parseInt(numeros[0]);
var B = parseInt(numeros[1]);
var C = parseInt(numeros[2]);

const R = (A + B)**2;
const S = (B + C)**2;

const D = (R + S) / 2;

//Saída
const mensagem = `
___________________________________________________________________________________________

    Dado os três numeros inteiros, sendo ${A}, ${B}, ${C}.
    Calculamos que D = (R + S) , onde R = (${A} + ${B})² e S = (${B} + ${C})².
                        -----
                          2 
    Ou seja:

        D = (${R} + ${S}) = ${D}.
            --------
                2   

___________________________________________________________________________________________`;

console.log(mensagem);