/*
Realize arredondamentos de números utilizando a regra usual da matemática: se a parte fracionaria for 
maior do que ou igual a 0,5, o numero é arredondado para o inteiro imediatamente superior, caso 
contrario, é arredondado para o inteiro imediatamente inferior.
*/

import { print, get_number } from "../utils/io_utils.js";

function main () {
	//Entrada
    const num = get_number(`Digite um valor: `);	
	
	//Processamento e Saída
	const partfraciona = num % 1;
    if (Eh_MaiorIgual_ZeroPontoCinco(partfraciona)) {
        const ArrendarSup = Math.ceil(num);
        print (`
        Dado o valor, ${num}. O resto da a parte fracionaria, sendo maior ou igual 0,5. 
        Temos o resultado será arrendodado para inteiro superior, sendo ${ArrendarSup}.`);
    } else {
        const ArrendarInf = Math.floor(num);
        print (`
        Dado o valor, ${num}. O resto da a parte fracionaria, sendo menor que 0,5. 
        Temos o resultado será arrendodado para inteiro inferior, sendo ${ArrendarInf}.`);
    }
}

function Eh_MaiorIgual_ZeroPontoCinco(partfraciona) {
    return partfraciona >= 0.5;
}

main();