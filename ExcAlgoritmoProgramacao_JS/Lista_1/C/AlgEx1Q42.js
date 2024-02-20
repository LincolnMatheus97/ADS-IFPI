/*
Escreva um algoritmo que, tendo como dados de entrada 2 pontos quaisquer no plano, ponto1 (x1,y1) e
ponto2 (x2,y2), escreva a distância entre eles, conforme fórmula abaixo. d = Sqrt[2] ((x2 - x1)² + (y2 - y1)²)
*/

import { question } from "readline-sync";

//Entrada
const pontA = question("Digite 2 pontos de um plano (x1,y1), separados apenas por uma virgula: ");
const pontB = question("Digite 2 pontos de um plano (x2,y2), separados apenas por uma virgula: ");

//Processamento
var num1 = pontA.split(",");
var num2 = pontB.split(",");

var x1 = parseInt(num1[0]);
var y1 = parseInt(num1[1]);
var x2 = parseInt(num2[0]);
var y2 = parseInt(num2[1]);

const par1 = (x2 - x1)**2;
const par2 = (y2 - y1)**2;
const dist = Math.sqrt(par1 + par2);

//Saída
const mensagem = `
-----------------------------------------------------------------------------------------------------------

    Dado os pontos quaisquer no plano, sendo P1(${x1} , ${y1}) e P2(${x2} , ${y2}).
    Conseguimos determinar a distância entre eles conforme a fórmula abaixo:
    
    -> d = Sqrt[2] ( (${x2} - ${x1})² + (${y2} - ${y1})² )   , ou seja,
    
    -> d = ${dist.toFixed(2)}.
     
-----------------------------------------------------------------------------------------------------------`;

console.log(mensagem);