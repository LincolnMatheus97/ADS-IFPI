/*
Leia 3 notas de um aluno e o peso de cada nota, calcule e escreva a média ponderada.
*/

import {question} from "readline-sync";

//Entrada
const n1 = Number(question("Digite sua nota: "));
const p1 = Number(question("Digite o peso da nota:"))
const n2 = Number(question("Digite sua nota: "));
const p2 = Number(question("Digite o peso da nota:"))
const n3 = Number(question("Digite sua nota: "));
const p3 = Number(question("Digite o peso da nota:"))

//Processamento
const somatorio = (n1*p1 + n2*p2 + n3*p3);
const somatorio2 = (p1+p2+p3);
const media_pond = (somatorio) / (somatorio2);

//Saída
const mensagem = `
_____________________________________________

Nota 1, Peso 1 -> ${n1} , ${p1}.
Nota 2, Peso 2 -> ${n2} , ${p2}.
Nota 3, Peso 3 -> ${n3} , ${p3}.
---------------------------------
Média Ponderada = ${media_pond.toFixed(2)}.

_____________________________________________`;

console.log(mensagem);