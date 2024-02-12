/*
Um algoritmo para gerenciar os saques de um caixa eletrônico deve possuir algum mecanismo para
decidir o numero de notas de cada valor que deve ser disponibilizado para o cliente que realizou o
saque. Um possível critério seria o da "distribuição ótima" no sentido de que as notas de menor valor
disponíveis fossem distribuídas em número mínimo possível. Por exemplo, se a maquina só dispõe de
notas de R$ 50, de R$ 10, de R$ 5 e de R$ 1, para uma quantia solicitada de R$ 87, o algoritmo deveria
indicar uma nota de R$ 50, três notas de R$ 10, uma nota de R$ 5 e duas notas de R$ 1. Escreva um
algoritmo que receba o valor da quantia solicitada e retorne a distribuição das notas de acordo com o
critério da distribuição ótima.
*/

import { question } from "readline-sync";

//Entrada
const saque = Number(question(`
        ############ Saque otimo ############
                        
        O terminal possui nota de $50, $10, $5 e $1.
        -> Digite quanto voce deseja sacar: `));
 
//Processamento
const nt50 = Math.floor(saque / 50);
const resto50 = saque % 50;
const nt10 = Math.floor(resto50 / 10);
const resto10 = resto50 % 10;
const nt5 = Math.floor(resto10 / 5);
const resto5 = resto10 % 5;
const nt1 = Math.floor(resto5);

//Saída
const mensagem = `
______________________________________________________________________________________________

    Dado o valor de saque, sendo R$: ${saque}. O terminal possui notas de $50, $10,
    $5 e $1. De acordo com o nosso critério de distribuição ótima. Você recebera:
    
    -> ${nt50} nota(s) de $50,
    -> ${nt10} nota(s) de $10,
    -> ${nt5} nota(s) de $5,
    -> ${nt1} nota(s) de $1,

______________________________________________________________________________________________`;

console.log(mensagem);