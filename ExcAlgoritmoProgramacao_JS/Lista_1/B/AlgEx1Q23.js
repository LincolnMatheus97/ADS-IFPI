/*
Leia um valor em kg (quilograma), calcule e escreva o equivalente em g (grama).
*/

import {question} from "readline-sync";

//Entrada
const Vkg = Number(question("Digite um valor em Kg(Quilogramas): "));

//Processamento
const Vg = Vkg * 1000;

//Saída
console.log(`Dado o valor em Kg, sendo ${Vkg}. Temos que o equivalente em g é igual á ${Vg.toFixed(2)}`);