/*
Um número é um quadrado perfeito quando a raiz quadrada do número é igual à soma das dezenas 
formadas pelos seus dois primeiros e dois últimos dígitos.
Exemplo: √9801 = 99 = 98 + 01. O número 9801 é um quadrado perfeito.
Escreva um algoritmo que leia um número de 4 dígitos e verifique se ele é um quadrado perfeito.
*/

import { print, get_number } from "../utils/io_utils.js";

function main () {
	//Entrada
    const numero = get_number("Digite um numero de 4 digitos: ");	
	
	//Processamento e Saída
	if (Numero_Tem_4_Digitos(numero)) {
        const unidmilha = Math.floor(numero /1000);
        const centena = Math.floor((numero % 1000) / 100);
        const dezena = Math.floor((numero % 100) / 10);
        const unidade = numero % 10;
        
        const dezena1 = unidmilha * 10 + centena;
        const dezena2 = dezena * 10 + unidade;
    
        const raiznum = Math.sqrt(numero);
    
        if (Eh_QuadradoPerfeito(raiznum, dezena1, dezena2)) {
            print (`
            -------------------------------------------------------------------------------------------
            
                Dado o número ${numero}, ele é um quadrado perfeito. 
                Pois Raiz(${numero}) = ${raiznum} = ${dezena1} + ${dezena2}.
                
            -------------------------------------------------------------------------------------------`);
        } else {
            print (`Dado o número ${numero}, ele não é um quadrado perfeito.`);
        }
    } else {
        print (`O número digitado não possui 4 dígitos.`);
    }
}

function Numero_Tem_4_Digitos(numero) {
    return (numero >= 1000 && numero <= 9999);
}

function Eh_QuadradoPerfeito(raiznum, dezena1, dezena2) {
    return (raiznum === dezena1 + dezena2);
}

main();