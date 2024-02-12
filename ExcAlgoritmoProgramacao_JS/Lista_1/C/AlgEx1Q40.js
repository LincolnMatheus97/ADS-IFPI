/*
Calcule a quantidade de dinheiro gasta por um fumante. Dados de entrada: o número de anos que ele
fuma, o nº de cigarros fumados por dia e o preço de uma carteira (1 carteira tem 20 cigarros).
*/

import { question } from "readline-sync";

//Entrada
const anosf = Number(question("Digite a quantos anos voce fuma: "));
const ncig = Number(question("Digite quantos cigarros voce fuma por dia: "));
const pcat = Number(question("Digite quanto voce paga em uma carteira de cigarros: "));

//Processamento
const valoruni = (20 / pcat);
const valordia = (valoruni * ncig);
const valormes = (valordia * 30);
const valorano = (valormes * 12);
const valortotal = valorano * anosf;

//Saída
const mensagem = `
------------------------------------------------------------------------------------------------

    Dado ao valor da carteira de cigarros, sendo R$ ${pcat}.
    Conseguimos dizer que o valor unitario, pela quantidade de cigarros
    fumados durante o dia, sendo de ${ncig} o valor unitario do cigarro é 
    R$ ${valoruni.toFixed(2)}, assim podemos determinar que por dia é gasto R$ ${valordia.toFixed(2)}, 
    no mês é gasto R$ ${valormes.toFixed(2)}, por ano ${valorano.toFixed(2)}. Já o valor total
    gasto baseado ${anosf} anos sendo fumante, podemos determinar de R$ ${valortotal.toFixed(2)}.

------------------------------------------------------------------------------------------------`;

console.log(mensagem);