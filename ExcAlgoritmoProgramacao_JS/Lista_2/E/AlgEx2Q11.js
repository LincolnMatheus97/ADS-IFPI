/*
Leia quatro números (opção, num 1, num2, num3) e que escreva o valor de num1 se opção igual a 1; o
valor de num2 se opção for igual a 2; e o valor de num3 se opção for igual a 3. Os únicos valores
possíveis para a variável opção são 1, 2 e 3.
*/

import { print, get_number } from "../../utils/io_utils.js";

function main() {
    //Entrada
    const opcao = get_number(`Digite a Opcao (1, 2 ou 3):  `);
    const numb1 = get_number(`Digite um primeiro numero: `);
    const numb2 = get_number(`Digite um segundo numero: `);
    const numb3 = get_number(`Digite um terceiro numero: `);

    //Processamento e Saída
    if (opcaoforvalida(opcao, numb1, numb2, numb3)) {
        const { resultado } = opcaoforvalida(opcao, numb1, numb2, numb3);
        print(`
        -----> O valor que corresponde a Opção dígitada é: ${resultado}.`);
    } else {
        print(`
        -----> Digite uma opção válida, (1, 2 ou 3).`)
    }
}

function opcaoforvalida(opcao, numb1, numb2, numb3) {
    let resultado;

    if (opcao === 1) {
        resultado = numb1;
    } else if (opcao === 2) {
        resultado = numb2;
    } else if (opcao === 3) {
        resultado = numb3;
    } else {
        return opcaoforvalida = false;
    }
    return { resultado }
}

main();