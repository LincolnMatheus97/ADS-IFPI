/*
Emita o resultado de uma pesquisa de opinião pública a respeito das eleições presidenciais.  O 
entrevistado deverá escolher entre 3 candidatos (Serra=45, Dilma=13 ou Ciro Gomes=23), ou então 
responder: indeciso=99, outros=98, nulo/branco=0.  O algoritmo deve ler a opinião de voto de cada 
entrevistado, encerrando-se a pesquisa com a opinião sendo igual a –1.  Ao final, devem ser mostrados: 
· a porcentagem de cada candidato; 
· a porcentagem dos outros candidatos; 
· a porcentagem de eleitores indecisos; 
· a porcentagem de votos nulos/brancos; 
· o total de entrevistados; 
· uma mensagem indicando a possibilidade ou não de haver 2º turno. 
*/

import { get_number, get_positive_number, percentual, porcentagem, print } from "../../utils/io_utils.js";

function main() {
    const numero_pesquisas = get_positive_number(`Digite o numero de pesquisados: `);

    let pesquisas_realizadas = numero_pesquisas;
    let votos_serra = 0;
    let votos_dilma = 0;
    let votos_ciro = 0;
    let votos_indeciso = 0;
    let votos_outros = 0;
    let votos_nulo_branco = 0;
    let mensagem = ``;

    while (pesquisas_realizadas > 0) {
        let voto = get_number(`
        Pesquisado n ${pesquisas_realizadas}, em quem voce vota:
        ---> Serra:             45
        ---> Dilma:             13
        ---> Ciro Gomes:        23
        -----------------------------
        ---> Indeciso:          99
        ---> Outros:            98
        ---> Nulo/Branco        00
        
        _____________________________
        Seu voto: `);

        voto = (voto === 45) ? votos_serra += 1 : (voto === 13) ? votos_dilma += 1 : (voto === 23) ? votos_ciro += 1 : (voto === 99) ?
            votos_indeciso += 1 : (voto === 98) ? votos_outros += 1 : votos_nulo_branco += 1;

        pesquisas_realizadas --;
    }

    let porcentagem_serra = porcentagem(votos_serra, numero_pesquisas);
    let porcentagem_dilma = porcentagem(votos_dilma, numero_pesquisas);
    let porcentagem_ciro = porcentagem(votos_ciro, numero_pesquisas);

    let porcentagem_outros = porcentagem(votos_outros, numero_pesquisas);
    let porcentagem_indeciso = porcentagem(votos_indeciso, numero_pesquisas);
    let porcentagem_nulos_brancos = porcentagem(votos_nulo_branco, numero_pesquisas);

    mensagem += `
    ---------------------------------------------------------------------------------------------------
    >>>>>>>>>>>>            PORCENTAGENS DE INTENÇÃO DE VOTO            >>>>>>>>>>>>
    
    ---> Total de pesquisas realizadas ---------------------            ${numero_pesquisas}
    ---> Intenção de Votos Serra (%) -----------------------            ${porcentagem_serra}%
    ---> Intenção de Votos Dilma (%) -----------------------            ${porcentagem_dilma}%
    ---> Intenção de Votos Ciro Gomes (%) ------------------            ${porcentagem_ciro}%
    ---> Intenção de Votos Outros Candidatos (%) -----------            ${porcentagem_outros}%
    ---> Intenção de Votos Indecisos (%) -------------------            ${porcentagem_indeciso}%
    ---> Intenção de Votos Nulos e Brancos (%) -------------            ${porcentagem_nulos_brancos}%
    
    --------------------------------------------------------------------------------------------------`;

    if (Eh_SegundoTurno(porcentagem_serra, porcentagem_dilma, porcentagem_ciro)) {
        mensagem += `

        Não exite a possibilidade de 2° Turno de eleições.`

    } else {
        mensagem += `

        Existe a possibilidade de 2° Turno de eleições`;
    }

    print(mensagem);
}

function Eh_SegundoTurno(num1, num2, num3) {
    return (num1 < 50 && num2 < 50 && num3 < 50);
}

main();