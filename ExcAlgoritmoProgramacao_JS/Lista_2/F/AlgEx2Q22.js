/*
Leia a hora do início de um jogo e a hora de fim do jogo (cada hora é composta por 2 variáveis inteiras: 
hora e minuto). Calcule e escreva a duração do jogo (horas e minutos), sabendo-se que o tempo 
máximo de duração do jogo é de 24 horas e que ele pode iniciar-se em um dia e terminar no dia 
seguinte.
*/

import { question } from "readline-sync";
import { print } from "../utils/io_utils.js";

function main () {
	//Entrada
    const time1 = question(`
    Digite a hora de inicio do jogo, separando as horas dos minutos com dois pontos(hh:mm): `);
    const time2 = question(`
    Digite a hora do termino do jogo, serparando as horas dos minutos com dois pontos(hh:mm): `);
	
	//Processamento
	const inicio = time1.split(":");
    let hora1 = parseInt(inicio[0]);
    let min1 = parseInt(inicio[1]);
    const final = time2.split(":");
    let hora2 = parseInt(final[0]);
    let min2 = parseInt(final[1]);

    let duracaomin = (((hora2 * 60) + min2) - ((hora1 * 60) + min1));
    let horas = Math.floor(duracaomin / 60);
    let min = duracaomin % 60;

    if (JogoComeca_Em_Um_Dia_Termina_Em_Outro(duracaomin)) {
        duracaomin += 24 * 60;
        horas = Math.floor(duracaomin / 60);
        min = duracaomin % 60;
        print (`
        ----------------------------------------------------------------------------------------------
    
        Sabendo que o jogo se inicia às ${hora1}:${min1}. E termina às ${hora2}:${min2}.
        Temos então que, o jogo tem duração de ${horas}:${min}.
        
        ----------------------------------------------------------------------------------------------`);
    } else {
        print (`
        ----------------------------------------------------------------------------------------------
    
        Sabendo que o jogo se inicia às ${hora1}:${min1}. E termina às ${hora2}:${min2}.
        Temos então que, o jogo tem duração de ${horas}:${min}.
        
        ----------------------------------------------------------------------------------------------`);
    }

}

function JogoComeca_Em_Um_Dia_Termina_Em_Outro(duracaomin) {
    return duracaomin < 0;
}

main();