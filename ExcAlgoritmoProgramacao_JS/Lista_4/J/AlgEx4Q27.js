/*
Escreva um algoritmo que leia um conjunto de dados de um grupo de 100 pessoas, sexo (1=Masculino, 
2=Feminino), idade e estado civil (1=Casado, 2=Solteiro, 3=Divorciado, 4=Viúvo) e escreva: 
· Média de idade das mulheres; 
· Média de idade dos homens; 
· O percentual de homens solteiros; 
· O percentual de mulheres solteiras; 
· A quantidade de mulheres divorciadas acima de 30 anos. 
*/

import { get_number, porcentagem, print } from "../../utils/io_utils.js";

function main() {
    const dados = 100;
    let somatorio_idades_homens = 0;
    let total_homens = 0;
    let somatorio_idades_mulheres = 0;
    let total_mulheres = 0;
    let total_homens_solteiros = 0;
    let total_mulheres_solteiras = 0;
    let total_mulheres_divorciadas_acima_30 = 0;

    let contador = 0;

    while (contador !== dados) {
        let sexo = get_number(`
        Digite o numero referente ao seu sexo:
        1 - Masculino
        2 - Feminino
        ------------------
        `);
        let idade = get_number(`
        Digite sua idade: `);
        let estado_civil = get_number(`
        Digite o numero referente ao seu estado civil:
        1 - Casado
        2 - Solteiro
        3 - Divorciado
        4 - Viuvo
        ------------------
        `);

        if (sexo === 1) {
            somatorio_idades_homens += idade;
            total_homens++;
            if (estado_civil === 2) {
                total_homens_solteiros++;
            }
        } else {
            somatorio_idades_mulheres += idade;
            total_mulheres++
            if (estado_civil === 2) {
                total_mulheres_solteiras++;
            } else if (estado_civil === 3 && idade > 30) {
                total_mulheres_divorciadas_acima_30++;
            }
        }
        contador++;
    }

    let media_idade_homens = somatorio_idades_homens / total_homens;
    let media_idade_mulheres = somatorio_idades_mulheres / total_mulheres;

    let porcentagem_homem_solteiro = porcentagem(total_homens_solteiros, dados);
    let porcentagem_mulher_solteira = porcentagem(total_mulheres_solteiras, dados);

    print(`
    ------------------------------------------------------------------------------------
    >>>>>>>>>>>>>>>>>>>>>>>          RESULTADOS DOS DADOS        >>>>>>>>>>>>>>>>>>>>>>>
    
    ---> Média de idade das mulheres:   -----------------------     ${media_idade_mulheres.toFixed(2)}
    ---> Média de idade dos homens: ---------------------------     ${media_idade_homens.toFixed(2)}
    ---> O percentual de homens solteiros:  -------------------     ${porcentagem_homem_solteiro.toFixed(2)} %
    ---> O percentual de mulheres solteiras: ------------------     ${porcentagem_mulher_solteira.toFixed(2)} %
    ---> A quantidade de mulheres divorciadas acima de 30 anos      ${total_mulheres_divorciadas_acima_30}
    
    ------------------------------------------------------------------------------------`);
}

main();