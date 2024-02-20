/*
Leia o valor da base e altura de um triângulo, calcule e escreva sua área. (área=(base * altura)/2)
*/

import {question} from "readline-sync";

//Entrada
const base = Number(question("Digite o valor da base do Triangulo: "));
const altura = Number(question("Digite o valor da altura do Triangulo: "));

//Processamento
const area = (base * altura) / 2;

//Saída
const mensagem = `
_______________________________________________________________________
                                                 _
                        .                        |   
                    .       .                    |
                .               .                | H
            .                       .            |
        .   .   .   .   .   .   .   .   .        | 
                                                 _                            
      |-----------------------------------|     
                        b                       

    O calculo para definir a Área do Triangulo é:
    
    A = (b * H) -> A = (${base} * ${altura}) -> A = ${area.toFixed(2)}. 
        -------         ------
           2               2                       
_______________________________________________________________________`;

console.log(mensagem); 