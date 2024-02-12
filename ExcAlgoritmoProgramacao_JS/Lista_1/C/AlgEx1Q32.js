/*
Leia um número inteiro (3 dígitos), calcule e escreva a diferença entre o número e seu inverso.
*/

import {question} from "readline-sync";

//Entrada
const numit = question("Digite um numero inteiro (3 digitos): ");

//Processamento
var n1 = numit[0];
var n2 = numit[1];
var n3 = numit[2];

const invnum = n3+n2+n1;
const dif = numit - invnum;

//Saída
const mensagem = `
_____________________________________________________________________

    Dado o número inteiro fornecido, sendo ${numit}.
    Temos que a diferença entre número e seu inverso é:
    ${numit} e ${invnum} é igual á ${dif}.

_____________________________________________________________________`;

console.log(mensagem);