/*
Faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:
a) "Telefonou para a vítima ?"
b) "Esteve no local do crime ?"
c) "Mora perto da vítima ?"
d) "Devia para a vítima ?"
e) "Já trabalhou com a vítima ?"
O algoritmo deve no final emitir uma classificação sobre a participação da pessoa no crime. Se a pessoa
responder positivamente a 2 questões ela deve ser classificada como "Suspeita", entre 3 e 4 como
"Cúmplice" e 5 como "Assassino". Caso contrário, ele será classificado como "Inocente".
*/

import { question } from "readline-sync";
import { print } from "../../utils/io_utils.js";

function main() {
    //Entrada
    const pergt_1 = question(`
    ---> Voce telefonou para a vitima ? `).toUpperCase();
    const pergt_2 = question(`
    ---> Voce esteve no local do crime ? `).toUpperCase();
    const pergt_3 = question(`
    ---> Voce mora perto da vitima ? `).toUpperCase();
    const pergt_4 = question(`
    ---> Voce devia para a vitima ? `).toUpperCase();
    const pergt_5 = question(`
    ---> Voce trabalhou com a vitima ? `).toUpperCase();

    //Processamento e Saída
    let resposta;
    let situacao = 0;

    if (Respostas_Validas(pergt_1, pergt_2, pergt_3, pergt_4, pergt_5)) {
        if (Pergunt_1_Eh_Sim(pergt_1)) {
            situacao++;

        } else { }
        if (Pergunt_2_Eh_Sim(pergt_2)) {
            situacao++;

        } else { }
        if (Pergunt_3_Eh_Sim(pergt_3)) {
            situacao++;

        } else { }
        if (Pergunt_4_Eh_Sim(pergt_4)) {
            situacao++;

        } else { }
        if (Pergunt_5_Eh_Sim(pergt_5)) {
            situacao++;

        } else { }

        if (Situacao_Crime(situacao)) {
            resposta = `${situacao === 2 ? `Suspeito` : `Cúmplice`}`;

        } else {
            resposta = `${situacao === 5 ? `Assassino` : `Inocente`}`;

        }
        print(`
        -------------------------------------------------------------
        #### RESPOSTAS DO QUESTIONARIO ####
        ---> Pergunta 1:        ${pergt_1},
        ---> Pergunta 2:        ${pergt_2},
        ---> Pergunta 3:        ${pergt_3},
        ---> Pergunta 4:        ${pergt_4},
        ---> Pergunta 5:        ${pergt_5},
        ______________________________________________
        
        Suas respostas positivas, foram no total de ${situacao}.
        Você é considerado: ${resposta}.
        -------------------------------------------------------------`);

    } else {
        print(`
        ---> Escreva respostas válidas, apenas Sim ou Nao. `)
    }

}

function Respostas_Validas(pergt_1, pergt_2, pergt_3, pergt_4, pergt_5) {
    return ((pergt_1 === `SIM` || pergt_1 === `NAO`) && (pergt_2 === `SIM` || pergt_2 === `NAO`) &&
        (pergt_3 === `SIM` || pergt_3 === `NAO`) && (pergt_4 === `SIM` || pergt_4 === `NAO`) &&
        (pergt_5 === `SIM` || pergt_5 === `NAO`))
}

function Pergunt_1_Eh_Sim(pergt_1) {
    return pergt_1 === `SIM`;
}

function Pergunt_2_Eh_Sim(pergt_2) {
    return pergt_2 === `SIM`;
}

function Pergunt_3_Eh_Sim(pergt_3) {
    return pergt_3 === `SIM`;
}

function Pergunt_4_Eh_Sim(pergt_4) {
    return pergt_4 === `SIM`;
}

function Pergunt_5_Eh_Sim(pergt_5) {
    return pergt_5 === `SIM`;
}

function Situacao_Crime(situacao) {
    return (situacao >= 2 && situacao <= 4);
}

main();