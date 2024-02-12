/*
Leia a idade de uma pessoa expressa em anos, meses e dias e escreva-a expressa apenas em dias.
*/

import { question } from "readline-sync";

//Entrada
const idade = question("Digite sua idade. Pondo em anos, meses e dias separados por virgulas: ");

//Processamento
var numeros = idade.split(",");
var ano = parseInt(numeros[0]);
var mes = parseInt(numeros[1]);
var dia = parseInt(numeros[2]);

const anos = (ano * 365);
const meses = (mes * 30);
const dias = dia;

const diast = (anos + meses + dias);

//Saída
const mensagem = `
__________________________________________________________________________________

    Dada a idade fornecida em ${ano} anos, ${mes} meses e ${dia} dias.
    Isso é equivalente á um total de ${diast} dias.
    
__________________________________________________________________________________`;

console.log(mensagem);