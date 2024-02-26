/*
Leia 5 (cinco) números inteiros e escreva o maior e o menor deles. Considere que todos os valores são
diferentes.
*/

import { print, get_number } from "../utils/io_utils.js";

function main () {
	//Entrada
    const num1 = get_number(`Digite um primeiro numero: `);
    const num2 = get_number(`Digite um segundo  numero: `);
    const num3 = get_number(`Digite um terceiro numero: `);
    const num4 = get_number(`Digite um quarto numero: `);
	const num5 = get_number(`Digite um quinto numero: `);
	
	//Processamento e Saída
	if (Todos_valors_sao_Dif(num1, num2, num3, num4, num5)) {
        const maior  = MaiorValor(num1, num2, num3, num4, num5);
        const menor = MenorValor(num1, num2, num3, num4, num5);
        print (`
        ----------------------------------------------------------------------------------------
        
            Dado os números digitados, sendo ${num1}, ${num2}, ${num3}, ${num4} e ${num5}.
            Temos que o maior número é ${maior} e o menor número é ${menor}.
            
        ----------------------------------------------------------------------------------------`);
    } else {
        print (`
        ----------------------------------------------------------------------------------------
        
            Dígite uma sequência, onde todos os números são diferentes.
            
        ----------------------------------------------------------------------------------------`);
    }	
}

function Todos_valors_sao_Dif(num1, num2, num3, num4, num5) {
    return (num1 !== num2 && num1 !== num3 && num1 !== num4 && num1 !== num5 &&
            num2 !== num3 && num2 !== num4 && num2 !== num5 &&
            num3 !== num4 && num3 !== num5 &&
            num4 !== num5);
}

function MaiorValor(num1, num2, num3, num4, num5) {
    let maior = Math.max(num1, num2, num3, num4, num5);
    return maior;
}

function MenorValor(num1, num2, num3, num4, num5) {
    let menor = Math.min(num1, num2, num3, num4, num5);
    return menor;
}

main();