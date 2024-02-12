/*
Leia a idade de uma pessoa expressa em dias e escreva-a expressa em anos, meses e dias.
*/

import { question } from "readline-sync";

//Entrada
const numdia = Number(question("Digite sua idade em dias: "));

//Processamento
var anos = Math.floor(numdia / 365);
var resto = numdia % 365;
var meses = Math.floor(resto /30);
var dias = numdia % 30;

//Saída
const mensagem = `
_____________________________________________________________________________________________

    Dada a idade em dias, sendo ${numdia}. Temos que isso é equivalente
    á ${anos} anos, ${meses} meses e ${dias} dias. 
    
_____________________________________________________________________________________________`;

console.log(mensagem);