/*
Leia dois valores e uma das seguintes operações a serem executadas (codificadas da seguinte forma: 1 –
Adição, 2 – Subtração, 3 – Multiplicação e 4 – Divisão). Calcule e escreva o resultado dessa operação
sobre os dois valores lidos.
*/

import { get_number, print } from "../../utils/io_utils.js";

function main() {
    //Entrada
    const num1 = get_number(`Digite um primeiro valor: `);
    const num2 = get_number(`Digite um segundo valor: `);
    let opcao = get_number(`
        -----------------------------------------------------------------
        
            Escolha uma das operacoes abaixo para realizar com os
            valores digitados anteriormente:
            1 - Adicao
            2 - Subtracao
            3 - Multiplicacao
            4 - Divisao
            -------------------
            Opcao: `);

    //Processamento e Saída
    const { resultado } = opcoes(num1, num2, opcao);
    print(`${resultado}`);
}

function opcoes(num1, num2, opcao) {
    let mensagem;

    switch (opcao) {
        case 1:
            const soma = num1 + num2;
            mensagem = (`
            Você selecionou a adição, logo: ${num1} + ${num2} = ${soma}.`);
            break;
        case 2:
            const subtra = num1 - num2;
            mensagem = (`
            Você selecionou a subtração, logo ${num1} - ${num2} = ${subtra}.`);
            break;
        case 3:
            const mult = num1 * num2;
            mensagem = (`
            Você selecionou a multiplicação, logo ${num1} * ${num2} = ${mult.toFixed(2)}.`);
            break;
        case 4:
            const div = num1 / num2;
            mensagem = (`
            Você selecionou a divisão, logo ${num1} / ${num2} = ${div.toFixed(2)}.`);
            break;
        default:
            mensagem = (`
            Você não selecionou uma opção corretamente!`);
    }
    return { resultado: mensagem }
}

main();