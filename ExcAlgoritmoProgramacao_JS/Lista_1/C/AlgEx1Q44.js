/*
Sabendo que latão é constituído de 70% de cobre e 30% de zinco, escreva um algoritmo que calcule a
quantidade de cada um desses componentes para se obter certa quantidade de latão (em kg), informada
pelo usuário.
*/

import { question } from "readline-sync";

//Entrada
const kglat = Number(question("Digite o valor (em Kg) de latao que voce deseja: "));

//Processamento
var quantcb = (70 * kglat) / 100;
var quantzn = (30 * kglat) / 100;

//Saída
const mensagem = `
______________________________________________________________________________________________

    Dada a quantidade de latão que você deseja, sendo ${kglat} kg.
    E sabendo que 70% do latão é constituido de cobre e 30% de zinco.
    Temos que você precisa de ${quantcb} kg de cobre e ${quantzn} kg de zinco,
    para obter a quantidade desejada de latão.
    
______________________________________________________________________________________________`;

console.log(mensagem);