/*
Leia o salário de funcionários de uma empresa, calcule e escreva o novo salário (segundo os critérios 
descritos abaixo), a soma dos salários atuais, a soma dos salários reajustados e a diferença entre as 2 
somas. (Flag: salário=0) 
De              Até         Acréscimo 
R$0,00        R$2.999,99       25 %
R$3.000,00    R$5.999,99       20 % 
R$6.000,00    R$9.999,99       15 %
Acima de R$10.000,00           10 %
*/

import { get_number, percentual, print } from "../../utils/io_utils.js";

function main() {
    let soma_salarios_atuais = 0;
    let soma_salarios_reajustados = 0;

    while (true) {
        let salario_atual = get_number(`Digite seu salario atual: `);
        
        if (salario_atual === 0) {
            break;

        }

        soma_salarios_atuais += salario_atual;

        let reajuste = Calcular_Reajuste(salario_atual);
        let salario_reajustado = (salario_atual + reajuste);
        soma_salarios_reajustados += salario_reajustado;

        let difenca_atual_reajuste = (soma_salarios_reajustados - soma_salarios_atuais);

        print(`
        >>>>>>>>>>>>>>>>        TABELA DE SALARIOS          >>>>>>>>>>>>>>>>
        
        ---> Salario reajustado:                            ${salario_reajustado.toFixed(2)}
        ---> Soma Salário atual:                            ${soma_salarios_atuais.toFixed(2)}
        ---> Soma Salário reajustados:                      ${soma_salarios_reajustados.toFixed(2)}
        ---> Diferença entre Salários:                      ${difenca_atual_reajuste.toFixed(2)}
        
        --------------------------------------------------------------------`);

    }
}

function Calcular_Reajuste(numero) {
    let reajuste = (numero > 0 && numero < 3000) ? percentual(numero, 25) : (numero >= 3000 && numero < 6000) ? percentual(numero, 20)
        : (numero >= 6000 && numero < 10000) ? percentual(numero, 15) : percentual(numero, 10);

    return reajuste;
}

main();