/*
Um sistema de equações lineares do tipo ax + by = c e dx + ey = f, pode ser resolvido segundo mostrado abaixo:
x = (ce - bf) / (ae - bd) e y = (af - cd) / (ae - bd). Escreva um algoritmo que leia os coeficientes a, b, c, d, e e f, 
calcule e escreva os valores de x e y.
*/

import { question } from "readline-sync";

//Entrada
const coef = question("Digite 6 numeros inteiros, separados por virgula: ");

//Processamento
var num = coef.split(",");
var a = parseInt(num[0]);
var b = parseInt(num[1]);
var c = parseInt(num[2]);
var d = parseInt(num[3]);
var e = parseInt(num[4]);
var f = parseInt(num[5]);

const x = (c*e - b*f) / (a*e - b*d);
const y = (a*f - c*d) / (a*e - b*d);

//Saída
const mensagem = `
____________________________________________________________________________________________

    Dado os coeficientes a = ${a}, b = ${b}, c = ${c}, d = ${d}, e = ${e} e f = ${f}.
    Vamos determinar os valores de x e y, onde são calculados por:
    
        (${c} * ${e}) - (${b} * ${f})           (${a} * ${f}) - (${c} * ${d})
    x = -------------------   e   y = ---------------------
        (${a} * ${e}) - (${b} * ${d})           (${a} * ${e}) - (${b} * ${d})   
    
    
    
    x = ${x.toFixed(2)}     e       y = ${y.toFixed(2)}
    
____________________________________________________________________________________________`;

console.log(mensagem);