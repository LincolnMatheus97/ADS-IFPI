/*
Leia valores inteiros em duas variáveis distintas e se o resto da divisão da primeira pela segunda for 1
escreva a soma dessas variáveis mais o resto da divisão; se for 2 escreva se o primeiro e o segundo valor
são pares ou ímpares; se for igual a 3 multiplique a soma dos valores lidos pelo primeiro; se for igual a 4
divida a soma dos números lidos pelo segundo, se este for diferente de zero. Em qualquer outra situação
escreva o quadrado dos números lidos.
*/

import { print, get_number } from "../utils/io_utils.js";

function main () {
	//Entrada
	const num1 = get_number("Digite um primeiro valor inteiro: ");
    const num2 = get_number("Digite um segundo valor inteiro: ");
	
	//Processamento e Saída
    const restodiv = num1 % num2;

	if (Eh_Igual_Um(num1, num2, restodiv)) {
        print (
        Eh_Igual_Um(num1, num2, restodiv)
        );
    } else if (Eh_Igual_Dois(num1, num2, restodiv)) {
        print (
        Eh_Igual_Dois(num1, num2, restodiv)      
        );
    } else if (Eh_Igual_Tres(num1, num2, restodiv)) {
        print (
        Eh_Igual_Tres(num1, num2, restodiv)        
        );
    } else if (Eh_Igual_Quatro_E_Num2_Difent_Zero(num1, num2, restodiv)) {
        print (
        Eh_Igual_Quatro_E_Num2_Difent_Zero(num1, num2, restodiv)        
        );
    } else {
        const num1_sqrt = num1 **2;
        const num2_sqrt = num2 **2;
        print (`
        O quadrado do primeiro e segundo valores respectivamente são: ${num1_sqrt.toFixed(2)} e ${num2_sqrt.toFixed(2)}.`);
    }
}

function Eh_Igual_Um(num1, num2, restodiv) {
    if (restodiv === 1) {
        const soma_m_resto = ((num1 + num2) + (restodiv));
        return (`A soma das variáveis mais o resto da divisão é igual a: ${soma_m_resto}.`);
    }
}

function Eh_Igual_Dois(num1, num2, restodiv) {
    if (restodiv === 2) {
        if ((num1 % 2) === 0 && (num2 % 2) === 0) {
            return (`O primeiro e o segundo valor são pares.`);            
        } else {
            return (`O primeiro e o segundo valor são ímpares.`);           
        }
    }
}

function Eh_Igual_Tres(num1, num2, restodiv) {
    if (restodiv === 3) {
        const mult_soma = ((num1 + num2) * num1);
        return (`A multiplicação da soma dos dois valores pelo primeiro é igual a: ${mult_soma}.`);
    }
}

function Eh_Igual_Quatro_E_Num2_Difent_Zero(num1, num2, restodiv) {
    if (restodiv === 4 && num2 !== 0) {
        const div_soma = ((num1 + num2) / num2);
        return (`A divisão da soma dois valores pelo o segundo é igual a: ${div_soma}.`);  
    } 
}

main();