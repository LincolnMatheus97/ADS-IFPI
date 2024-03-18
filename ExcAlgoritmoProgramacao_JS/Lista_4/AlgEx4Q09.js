/*
Confira o resultado de uma competição de natação entre dois clubes. O programa deve ler o número da
prova e a quantidade de nadadores. O fim dos dados é indicado pelo número da prova igual a 0 e
quantidade de nadadores igual a 0. A seguir, para cada nadador deverá ler nome, classificação, tempo,
clube (“a” ou “b”) e determinar os pontos obtidos por cada clube, de acordo com o seguinte critério:
Lugar Pontos
1       9
2       6
3       4
4       3
*/

const { question } = require("readline-sync");

function main() {
    let numero_prova = Number(question(`Digite o numero da prova: `));
    let numero_nadador = Number(question(`Digite o numero de nadadores: `));

    let pontuacao_clubeA = 0;
    let pontuacao_clubeB = 0;

    while(numero_nadador !== 0 && numero_prova !== 0 ) {
        let nome_nadador = question(`Digite seu nome competidor nº${numero_nadador}: `);
        let classificação_nadador = Number(question(`Digite sua classificação competidor n°${numero_nadador}: `));
        let tempo_nadador = Number(question(`Digite o seu tempo competidor n°${numero_nadador}: `));
        let clube_nadador = question(`Digite seu clube competidor n°${numero_nadador}, (A OU B): `).toUpperCase();

        if(clube_nadador === `A`) {
            if(classificação_nadador === 1 ) {
                pontuacao_clubeA += 9;
            } else if(classificação_nadador === 2) {
                pontuacao_clubeA += 6;
            } else if(classificação_nadador === 3) {
                pontuacao_clubeA += 4;
            } else {
                pontuacao_clubeA += 3;
            }
        } else {
            if(classificação_nadador === 1 ) {
                pontuacao_clubeB += 9;
            } else if(classificação_nadador === 2) {
                pontuacao_clubeB += 6;
            } else if(classificação_nadador === 3) {
                pontuacao_clubeB += 4;
            } else {
                pontuacao_clubeB += 3;
            }
        }
        numero_nadador --;

        if(numero_nadador === 0) {
            numero_prova -= numero_prova;
        }

    }
    let clube_campeao;

    clube_campeao = pontuacao_clubeA > pontuacao_clubeB ? `Clube A` : `Clube B`;

    console.log(`As pontuações dos clubes foram A:${pontuacao_clubeA}, B:${pontuacao_clubeB} e o clube campeão é ${clube_campeao}`);
    
}

main();