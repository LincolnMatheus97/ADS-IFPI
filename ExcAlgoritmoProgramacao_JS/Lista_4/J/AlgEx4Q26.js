/*
Cada espectador de um cinema respondeu a um questionário no qual constava sua idade e a sua opinião 
em relação ao filme (1=ótimo, 2=bom, 3=regular, 4=péssimo). Escreva um algoritmo que leia a idade e 
a opinião das pessoas, calcule e mostre ao final: (FLAG: idade = -1). 
· a média das idades das pessoas que responderam ótimo; 
· a quantidade de pessoas que respondeu regular; 
· o percentual de pessoas que respondeu bom entre os entrevistados. 
*/

import { get_number, porcentagem, print } from "../../utils/io_utils.js";

function main() {
    let totais_entrevistados = 0;
    let somatorio_idades_otimos = 0;
    let quantidade_idade_otimos = 0;
    let opiniao_otimo = 0;
    let opiniao_bom = 0;
    let opiniao_regular = 0;

    while (true) {
        let idade = get_number(`
        Digite sua idade: `);
        if (idade === -1) {
            break;
        }
        let opiniao = get_number(`
        Digite sua opiniao em relacao ao filme: 
        1 - Otimo
        2 - Bom
        3 - Regular
        4 - Pessimo
        -----------------
        Sua Opiniao: `);

        if (opiniao === 1) {
            somatorio_idades_otimos += idade;
            quantidade_idade_otimos ++
        }

        opiniao = (opiniao === 1) ? opiniao_otimo += 1 : (opiniao === 2) ? opiniao_bom += 1 : opiniao_regular += 1;

        totais_entrevistados++;
    }

    let media_opiniao_otimo = somatorio_idades_otimos / quantidade_idade_otimos;
    let porcentagem_opiniao_bom = porcentagem(opiniao_bom, totais_entrevistados);

    print(`
    ---------------------------------------------------------------------------------------------------------------

                    >>>>>>>>>>>>>>          RESULTADOS QUESTIONÁRIO         >>>>>>>>>>>>>>
    
    ---> Média das idades das pessoas que responderam ótimo --------------- ${media_opiniao_otimo.toFixed(2)}
    ---> A quantidade de pessoas que respondeu regular  ------------------- ${opiniao_regular}
    ---> O percentual de pessoas que respondeu bom entre os entrevistados - ${porcentagem_opiniao_bom.toFixed(2)} %
    
    ---------------------------------------------------------------------------------------------------------------`);

}

main();