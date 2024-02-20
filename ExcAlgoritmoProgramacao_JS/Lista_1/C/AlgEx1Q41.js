/*
O custo ao consumidor de um carro novo é a soma do custo de fábrica com a percentagem do
distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que a percentagem do distribuidor
seja de 28% e os impostos de 45%, escreva um algoritmo que leia o custo de fábrica de um carro e
escreva o custo ao consumidor.
*/

import { question } from "readline-sync";

//Entrada
const valorfb = Number(question("Digite o valor de custo de fabrica do carro: "));

//Processamento
const percdt = (28 * valorfb) / 100;
const impt = (45 * valorfb) / 100;
const valorcd = (valorfb + percdt + impt);

//Saída
const mensagem = `
_______________________________________________________________________________________________

    Sendo o custo de fábrica de um carro R$ ${valorcd}, Determinaremos quanto
    esse carro novo custara para o consumidor, baseado no calculo:
    
    Custo de Fábrica ->                                                         ${valorcd}
                                                                                +
    Percentagem do Distribuidor (28% do custo de fábrica) ->                    ${percdt}
                                                                                +
    Percentagem de Impostos (45% do custo de fábrica) ->                        ${impt}
    --------------------------------------------------------------------------------------------
    Custo ao Consumidor =                                                   R$: ${valorcd}
    
_______________________________________________________________________________________________`;

console.log(mensagem);