/*
Leia 5 (cinco) números inteiros, calcule a sua média e escreva os que são maiores que a média.
*/

import { get_positive_number, print } from "../utils/io_utils.js";

function main () {
	//Entrada
	const num1 = get_positive_number(`Digite um primeiro numero: `);
    const num2 = get_positive_number(`Digite um segundo  numero: `);
    const num3 = get_positive_number(`Digite um terceiro numero: `);
    const num4 = get_positive_number(`Digite um quarto numero: `);
	const num5 = get_positive_number(`Digite um quinto numero: `);
	
	//Processamento E Saída
    const media = (num1 + num2 + num3 + num4 + num5) / 5;
	
    if (numEhmaiorQmedia(num1, num2, num3, num4, num5, media)) {
        const maior = numEhmaiorQmedia(num1, num2, num3, num4, num5, media);
        print (`
        ---------------------------------------------------------------------------------------------
    
        Dado os números fornecidos, sendo: ${num1}, ${num2}, ${num3}, ${num4} e ${num5}.
        Podemos determinar que a média desses números é ${media}, e que os números que são 
        maiores que a média: ${maior}.
        
        ---------------------------------------------------------------------------------------------`);
    } else {
        print (`
        ---------------------------------------------------------------------------------------------
    
        Dado os números fornecidos, sendo: ${num1}, ${num2}, ${num3}, ${num4} e ${num5}.
        Podemos determinar que a média desses números é ${media}, e nenhum número é maior,
        que a média.
        
        ---------------------------------------------------------------------------------------------`);
    }

}

function numEhmaiorQmedia(num1, num2, num3, num4, num5, media) {
    let maior = "";
    if (num1 > media || num2 > media || num3 > media || num4 > media
        || num5 > media) {
            if (num1 > media) {
                maior += `(${num1}) `;
            }
            if (num2 > media) {
                maior += `(${num2}) `;
            }
            if (num3 > media) {
                maior += `(${num3}) `;
            }
            if (num4 > media) {
                maior += `(${num4}) `;
            }
            if (num5 > media) {
                maior += `(${num5}) `;
            }
        } return maior;
}

main();