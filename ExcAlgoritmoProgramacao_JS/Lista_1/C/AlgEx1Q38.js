/*
Leia 2 (duas) frações (numerador e denominador), calcule e escreva a soma destas frações, escrevendo o
resultado em forma de fração.
*/

import { question } from "readline-sync";

//Entrada
const num1 = Number(question("Digite o numerador da primeira fracao: "));
const den1 = Number(question("Digite o denominador da primeira fracao: "));
const num2 = Number(question("Digite o numerador da segunda fracao: "));
const den2 = Number(question("Digite o denominador da segunda fracao: "));

//Processamento
function mdc(a, b) {                        
    return b === 0 ? a : mdc(b, a % b);     // Utilizei uma expressão ternária para controlar a recursão da função mdc:
                                            // - Se b é igual a zero, retorna a (o maior divisor comum foi encontrado).
                                            // - Caso contrário, continua a recursão com os argumentos b e o resto da divisão entre a e b.
 
}
function mmc(a, b){
    return (a * b) / mdc(a, b);

}

const denC = mmc(den1, den2); //Calculando o MMC Dos denominadores.

const nnum1 = num1 * (denC / den1); //Convertendo as fraçoes para terem o mesmo denominador.
const nnum2 = num2 * (denC / den2);

const numsoma = nnum1 + nnum2; //Somando os numeradores

//Saída
const mensagem =`
_________________________________________________________________________________________________________

    A soma das frações:    ${num1}           ${num2}        ${numsoma}
                           ----    +    ----  =   ----
                           ${den1}             ${den2}        ${denC}

_________________________________________________________________________________________________________`;

console.log(mensagem);