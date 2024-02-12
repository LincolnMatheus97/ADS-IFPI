/*
Uma loja vende seus produtos no sistema entrada mais duas prestações, sendo a entrada maior ou igual a
cada uma das duas prestações; estas devem ser iguais, inteiras e as maiores possíveis. Por exemplo, se o
valor da mercadoria for R$ 270,00, a entrada e as duas prestações são iguais a R$ 90,00; se o valor da
mercadoria for R$ 302,00, a entrada é de R$ 102,00 e as duas prestações são iguais a R$ 100,00.
Escreva um algoritmo que receba o valor da mercadoria e forneça o valor da entrada e das duas
prestações, de acordo com as regras acima.
*/

import { question } from "readline-sync";

//Entrada
const valormc = Number(question("Digite quanto foi o valor da mercadoria: "));

//Processamento
const div = valormc / 3;
const entrada = Math.ceil(div);
const parcl = Math.floor(div);

//Saída
const mensagem = `
___________________________________________________________________________________________________________

    Dado o valor da mercadoria, sendo R$: ${valormc.toFixed(2)}. A compra pode ser paga de modo que:
    
    -> Entrada :            R$: ${entrada.toFixed(2)}
                                +
    -> Parcela :        2x  R$: ${parcl.toFixed(2)}
    --------------------------------------------
    -> Valor Mercadoria:    R$: ${valormc.toFixed(2)}
    
___________________________________________________________________________________________________________`;

console.log(mensagem);