/*
Em uma eleição presidencial existem 3 (três) candidatos. Os votos são informados através de códigos. 
Os dados utilizados para a contagem dos votos obedecem à seguinte codificação: 
· 1, 2, 3 = voto para os respectivos candidatos; 
· 9 = voto nulo; 
· 0 = voto em branco; 
Escreva um algoritmo que leia o código votado por N eleitores. Ao final, calcule e escreva: 
a) total de votos para cada candidato; 
b) total de votos nulos; 
c) total de votos em branco;
d) quem venceu a eleição;
*/

import { get_number, print } from "../utils/io_utils.js";

function main() {
    //Entrada
    const N = get_number(`Digite quantos eleitores tem na secao: `);

    //Processamento
    let i = 1;
    let total_votos = 0;
    let candidato_1 = 0;
    let candidato_2 = 0;
    let candidato_3 = 0;
    let nulo = 0;
    let branco = 0;

    for (i; Ate_N(i, N); i++) {
        const voto = get_number(`
        -------------------------------------------
            Eleitor ${i}, digite seu voto: 
            1 - Candidato A;
            2 - Candidato B;
            3 - Candidato C;
            
            9 - Nulo;
            0 - Branco;
        -------------------------------------------
            Seu voto:   `);

        total_votos += 1;

        if (Votou_Candidato(voto)) {
            if (voto === 1) {
                candidato_1++;
            } else {
                voto === 2 ? candidato_2++ : candidato_3++;
            }
        }

        if (Votou_NuloBranco(voto)) {
            voto === 9 ? nulo++ : branco++
        }
    }
    const ganhou = Mais_Votado(candidato_1, candidato_2, candidato_3);

    //Saída
    print(`
    ------------------------------------------------------------
    ##########          SEÇÃO ELEITORAL 106         ###########
    -> Total de votos:                              ${total_votos},
    -> Total de votos Candidato A                   ${candidato_1},
    -> Total de votos Candidato B                   ${candidato_2},
    -> Total de votos Candidato C                   ${candidato_3},
    
    -> Total de votos Nulos                         ${nulo},
    -> Total de votos Brancos                       ${branco},
    ____________________________________________________________
    
    -> QUEM GANHOU A ELEIÇÃO FOI O ${ganhou}.
    
    ------------------------------------------------------------`);
}

function Ate_N(num1, num2) {
    return num1 <= num2;
}

function Votou_Candidato(num) {
    return (num === 1 || num === 2 || num === 3);
}

function Votou_NuloBranco(num) {
    return (num === 9 || num === 0);
}

function Mais_Votado(num1, num2, num3) {
    if (num1 > num2 || num1 > num3) {
        return `Candidato A`;
    } else if (num2 > num1 || num2 > num3) {
        return `Candidato B`;
    } else if (num3 > num1 || num3 > num2) {
        return `Candidato C`;
    } else {
        return `Empate`
    }
}

main();