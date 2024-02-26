/*
Existem números de 4 dígitos (entre 1000 e 9999) que obedecem à seguinte característica: se dividirmos 
o número em dois números de dois dígitos, um composto pela dezena e pela unidade, e outro pelo 
milhar e pela centena, se somarmos estes dois novos números gerando um terceiro, o quadrado deste 
terceiro número é exatamente o número original de quatro dígitos. Por exemplo:
2025 -> dividindo: 20 e 25 -> somando temos 45 -> 452 = 2025.
*/

import { print, get_number } from "../utils/io_utils.js";

function main () {
	//Entrada
    const numero = get_number("Digite um numero de 4 digitos: ");	
	
	//Processamento e Saída
	if (Tem_4_Digitos(numero)) {
        const unidmilha = Math.floor(numero / 1000);
        const centena = Math.floor((numero % 1000) / 100);
        const dezena = Math.floor((numero % 100) / 10);
        const unidade = numero % 10;
    
        const dezena2 = unidmilha * 10 + centena;
        const unidade2 = dezena * 10 + unidade;
    
        const soma = dezena2 + unidade2;
        const quadrado = soma ** 2;
        
        if (Obedece(quadrado, numero)) {
            print (`
        ------------------------------------------------------------------------------------------------------------
            
            Dado o número ${numero}, podemos ver que ele obedece a seguinte características: 
            ${numero} -> dividindo : ${dezena2} e ${unidade2} -> somando temos ${soma} -> ${soma}² = ${quadrado} 
                
        ------------------------------------------------------------------------------------------------------------`);
        } else {
            print (`Dado o número ${numero}, ele não obedece as características`);
        }
    } else {
        print (`O número dado não possui 4 dígitos.`);
    }
	
}

function Tem_4_Digitos(numero) {
    return (numero >= 1000 && numero <= 9999);
}

function Obedece(quadrado, numero) {
    return (quadrado === numero);
}

main();