/*
Realize arredondamentos de números utilizando a regra usual da matemática: se a parte fracionaria for 
maior do que ou igual a 0,5, o numero é arredondado para o inteiro imediatamente superior, caso 
contrario, é arredondado para o inteiro imediatamente inferior.
*/

import { print, get_number } from "../../utils/io_utils.js";

function main() {
    //Entrada
    const num = get_number(`Digite um valor: `);

    //Processamento e Saída
    const partfraciona = num % 1;
    let Arrendar;
    let mensagem_1;
    let mensagem_2;

    if (Eh_MaiorIgual_ZeroPontoCinco(partfraciona)) {
        Arrendar = Math.ceil(num);
        mensagem_1 = `maior`;
        mensagem_2 = `superior`;

    } else {
        Arrendar = Math.floor(num);
        mensagem_1 = `menor`;
        mensagem_2 = `inferior`;

    }
    print(`
        Dado o valor, ${num}. O resto da a parte fracionaria, sendo ${mensagem_1} ou igual 0,5. 
        Temos o resultado será arrendodado para inteiro ${mensagem_2}, sendo ${Arrendar}.`);
}

function Eh_MaiorIgual_ZeroPontoCinco(partfraciona) {
    return partfraciona >= 0.5;
}

main();