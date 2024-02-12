/*
Leia um número inteiro (4 dígitos), calcule e escreva a soma dos elementos que o compõem. Ex.:
número = 9534 ; soma = 9+5+3+4 = 21.
*/

import {question} from "readline-sync";

//Entrada
const numit = question("Digite um numero inteiro (4 digitos): ");

//Processamento
var n1 = parseInt(numit[0]);
var n2 = parseInt(numit[1]);
var n3 = parseInt(numit[2]);
var n4 = parseInt(numit[3]);

const soma = (n1 + n2 + n3 + n4);

//Saída
const mensagem = `
________________________________________________________________________________

    Dado o número inteiro ${numit}, a soma dos elementos que compõem é
    -> ${numit} = ${n1} + ${n2} + ${n3} + ${n4}
            ----------------
              Soma é: ${soma}

________________________________________________________________________________`;

console.log(mensagem);