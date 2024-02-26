/*
Leia a quantidade de horas aula dadas por dois professores e o valor por hora recebido por cada um.
Escreva na tela qual dos professores tem salário total maior.
*/

import { print, get_number } from "../utils/io_utils.js";

function main() {
    //Entrada
    const hora1 = get_number(`
    --- Prof(1) digite quantas horas aulas foram dadas: `);
    const valor1 = get_number(`
    --- Prof(1) digite o valor da sua hora/aula: `);
    const hora2 = get_number(`
    --- Prof(2) digite quantas horas aulas foram dadas: `);
    const valor2 = get_number(`
    --- Prof(2) digite o valor da sua hora/aula: `);

    //Processamento e Saída
    const salarioP1 = hora1 * valor1;
    const salarioP2 = hora2 * valor2;

    print(`
        #### QUEM TEM O MAIOR SALÁRIO É: ####`);

    if (SalarioProf1_Eh_Maior(salarioP1, salarioP2)) {
        print(`
        -------------------------------------------------------------------
        O professor 1 tem o maior salário total, sendo R$:${salarioP1}.
        -------------------------------------------------------------------`);
    } else if (SalarioProf2_Eh_Maior(salarioP1, salarioP2)) {
        print(`
        -------------------------------------------------------------------  
        O professor 2 tem o maior salário total, sendo R$:${salarioP2}.
        -------------------------------------------------------------------`);
    } else {
        print(`
        -------------------------------------------------------------------
        Os salários dos Professores são iguais.
        -------------------------------------------------------------------`);
    }

}

function SalarioProf1_Eh_Maior(salarioP1, salarioP2) {
    return salarioP1 > salarioP2;
}

function SalarioProf2_Eh_Maior(salarioP1, salarioP2) {
    return salarioP2 > salarioP1;
}

main();