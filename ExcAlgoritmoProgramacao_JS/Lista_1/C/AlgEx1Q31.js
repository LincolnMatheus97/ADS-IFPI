/*
Leia um número inteiro (4 dígitos binários), calcule e escreva o equivalente na base decimal.
*/

import {question} from "readline-sync";

//Entrada
const numbi = question("Digite um numero inteiro (4 digitos binario): ");

//Processamento
var n1 = numbi[0];
var n2 = numbi[1];
var n3 = numbi[2];
var n4 = numbi[3];

const nm1 = n4 * (2**0);
const nm2 = n3 * (2**1);
const nm3 = n2 * (2**2);
const nm4 = n1 * (2**3);

const basedc = (nm1+nm2+nm3+nm4);

//Saída
const mensagem = `
________________________________________________________________________

    Dado o número inteiro (4 dígitos binários), sendo ${numbi}.
    Temos que é quivalente na base decimal á:
    -> ${n4} * (2^0) = ${nm1}
                                +
    -> ${n3} * (2^1) = ${nm2}
                                +
    -> ${n2} * (2^2) = ${nm3}
                                +     
    -> ${n1} * (2^3) = ${nm4}

    ------------------------------
    -> Base decimal  = ${basedc}.
    
________________________________________________________________________`;

console.log(mensagem);