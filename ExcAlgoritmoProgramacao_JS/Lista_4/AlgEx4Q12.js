/*
Leia vários códigos do jogador (1 ou 2) que ganhou o ponto, em uma partida de pingue-pongue, e 
responda quem ganha a partida. A partida chega ao final se: 
· Um dos jogadores chega a 21 pontos e a diferença de pontos entre os jogadores é maior ou igual a 2. 
· Se a primeira não for atendida, ganha aquele que, com mais de 21 pontos, consiga colocar uma 
diferença de 2 pontos sobre o adversário. 
*/

import { get_number, print } from "../utils/io_utils.js";

function main() {
    let ponto_jogador_1 = 0;
    let ponto_jogador_2 = 0;

    while (true) {
        let codigo_pontos = get_number(`Digite o codigo do jogador (1 ou 2), que ganhou o ponto: `);

        if(codigo_pontos === 1) {
            ponto_jogador_1 ++;
        } else {
            ponto_jogador_2 ++;
        }
        
        if ((ponto_jogador_1 === 21) && ((ponto_jogador_1 - ponto_jogador_2) > 2)) {
            break;

        } else if ((ponto_jogador_2 === 21) && ((ponto_jogador_2 - ponto_jogador_1) > 2)) {
            break;

        } else if (((ponto_jogador_1 && ponto_jogador_2) === 21) && ((ponto_jogador_1 - ponto_jogador_2) || (ponto_jogador_2 - ponto_jogador_1)) >= 2) {
            break;

        }
    }
}

main();