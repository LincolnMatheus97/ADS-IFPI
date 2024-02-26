/*
Leia as coordenadas cartesianas (x e y) de 2 (dois) pontos no plano, que corresponderão a dois cantos de 
um retângulo. Baseado nisto, calcule e escreva a área deste retângulo. Lembre-se de que o valor da área 
não pode ser negativo.
*/

import { question } from "readline-sync";
import { print } from "../utils/io_utils.js";

function main () {
	//Entrada
    const pontA = question("Digite as coordenadas de um pontoA(x e y), separando por virgula(,): ");
    const pontB = question("Digite as coordenadas de um pontoB(x e y), separando por virgula(,): ");	
	
	//Processamento e Saída
	let num1 = pontA.split(",");
    let num2 = pontB.split(",");
    
    let x1 = parseInt(num1[0]);
    let y1 = parseInt(num1[1]);
    let x2 = parseInt(num2[0]);
    let y2 = parseInt(num2[1]);

    if (AreaRetangulo_Eh_Positiva(x1, x2, y1, y2)) {
        const base = x2 - x1;
        const altura = y2 - y1;
        const area = base * altura;

        print (`
        ------------------------------------------------------------------------------------------------
        
            Dado o PontoA (${x1}, ${y1}) e PontoB (${x2}, ${y2}). Tomando que ${x1} e ${x2} são os 
            extremos da base do retângulo e ${y1} e ${y2} os extremos da altura do mesmo. Podemos 
            determinar que a área desse retângulo é igual à ${area}.
            
        ------------------------------------------------------------------------------------------------`);
    } else {
        print (`
        -> O valor da área não pode ser negativa. `);
    }
}

function AreaRetangulo_Eh_Positiva(x1, x2, y1, y2) {
    return (x2 > x1 && y2 > y1);
}

main();