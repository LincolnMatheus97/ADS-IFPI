/*
Leia um número e exiba o dia correspondente da semana. (1-Domingo, 2- Segunda etc.), se digitar outro
valor deve aparecer valor inválido.
*/

import { get_number, print } from "../../utils/io_utils.js";

function main() {
    //Entrada
    const numero = get_number(`
    ----> Digite um numero de 1 a 7, correspondente ao dias da semana: `);

    //Processamento
    let opcao = numero;
    let mensagem;

    mensagem = Dia_da_Semana(opcao, mensagem);

    //Saída
    print(`
    ------------------------------------------------------------------------------------
    
        ${opcao} - ${mensagem}.
        
    ------------------------------------------------------------------------------------`);
}

function Dia_da_Semana(opcao, mensagem) {
    switch (opcao) {
        case 1:
            mensagem = `Domingo`;
            break;
        case 2:
            mensagem = `Segunda-Feira`;
            break;
        case 3:
            mensagem = `Terça-Feira`;
            break;
        case 4:
            mensagem = `Quarta-Feira`;
            break;
        case 5:
            mensagem = `Quinta-Feira`;
            break;
        case 6:
            mensagem = `Sexta-Feira`;
            break;
        case 7:
            mensagem = `Sábado`;
            break;
        default:
            mensagem = `Valor Inválido`
    }
    return mensagem;
}

main();