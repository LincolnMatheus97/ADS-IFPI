/*
Foi feita uma pesquisa de audiência de canal de TV em várias casas em Teresina, num certo dia. Para 
cada casa visitada, o entrevistado informou o número do canal (2, 4, 5, 7, 10) e o número de pessoas que 
estavam assistindo TV. Escreva um algoritmo que leia um número indeterminado de dados (terminando 
quando for lido um canal igual a zero) e calcule o percentual de audiência para cada emissora, 
mostrando ao final, o número de cada canal e sua respectiva audiência. 
*/

import { get_number, get_positive_number, porcentagem, print } from "../../utils/io_utils.js";

function main() {
    let total_pessoas = 0;
    let total_canal2 = 0;
    let total_canal4 = 0;
    let total_canal5 = 0;
    let total_canal7 = 0;
    let total_canal10 = 0;

    while (true) {
        let voto = get_number(`
        Digite qual o canal que voces mais assistem em sua casa: 
        (2, 4, 5, 7 ou 10): `)

        if (voto === 0) {
            break;
        }

        let moradores = get_positive_number(`
        Quantas pessoas morram na sua casa: `);

        total_pessoas += moradores;

        total_canal2 = (voto === 2) ? total_canal2 += moradores : (voto === 4) ? total_canal4 += moradores : (voto === 5) ?
            total_canal5 += moradores : (voto === 7) ? total_canal7 += moradores : total_canal10 += moradores;

        

    }

    let porcentagem_canal2 = porcentagem(total_canal2, total_pessoas);
    let porcentagem_canal4 = porcentagem(total_canal4, total_pessoas);
    let porcentagem_canal5 = porcentagem(total_canal5, total_pessoas);
    let porcentagem_canal7 = porcentagem(total_canal7, total_pessoas);
    let porcentagem_canal10 = porcentagem(total_canal10, total_pessoas);

    print(`
    >>>>>>>>>>>>>>>>            PESQUISA DE AUDIÊNCIA           >>>>>>>>>>>>>>>>
    
    ---> Total de Pessoas Pesquisadas   ---------------------   ${total_pessoas}
    ---> Percentual de Audiência Canal 2    -----------------   ${porcentagem_canal2.toFixed(2)} %
    ---> Percentual de Audiência Canal 4    -----------------   ${porcentagem_canal4.toFixed(2)} %
    ---> Percentual de Audiência Canal 5    -----------------   ${porcentagem_canal5.toFixed(2)} %
    ---> Percentual de Audiência Canal 7    -----------------   ${porcentagem_canal7.toFixed(2)} %
    ---> Percentual de Audiência Canal 10    ----------------   ${porcentagem_canal10.toFixed(2)} %

    -------------------------------------------------------------------------------------`);
}

main();