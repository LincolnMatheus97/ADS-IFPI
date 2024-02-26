/*
Leia a medida de um ângulo (entre 0 e 360°) e escreva o quadrante (primeiro, segundo, terceiro ou
quarto) em que o ângulo se localiza.
*/

import { get_number, print } from "../utils/io_utils.js";

function main () {
	//Entrada
    const angulo = get_number("Digite a medida de angulo (entre 0 e 360): ");	
	
	//Processamento
	if(Eh_Igual0(angulo)) {
        print (`
        Dada a medida do ângulo, sendo ${angulo}°. Ele não pertence a nenhum quadrante, mas sim ao eixo que separa
        o primeiro e o quarto no plano cartesiano.`);
    } else if(Eh_Maior_Q_0_E_Menor_Q_90(angulo)) {
        print (`
        Dada a medida do ângulo, sendo ${angulo}°. Ele pertence ao primeiro quadrante do plano cartesiano.`);
    } else if(Eh_Igual90(angulo)) {
        print (`
        Dada a medida do ângulo, sendo ${angulo}°. Ele não pertence a nenhum quadrante, mas sim ao eixo que separa
        o primeiro e o segundo no plano cartesiano.`);
    } else if(Eh_Maior_Q_90_E_Menor_Q_180(angulo)) {
        print (`
        Dada a medida do ângulo, sendo ${angulo}°. Ele pertence ao segundo quadrante do plano cartesiano.`);
    } else if(Eh_Igual180(angulo)) {
        print (`
        Dada a medida do ângulo, sendo ${angulo}°. Ele não pertence a nenhum quadrante, mas sim ao eixo que separa
        o segundo e o terceiro no plano cartesiano.`);
    } else if(Eh_Maior_Q_180_E_Menor_Q_270(angulo)) {
        print (`
        Dada a medida do ângulo, sendo ${angulo}°. Ele pertence ao terceiro quadrante do plano cartesiano.`);
    } else if(Eh_Igual270(angulo)) {
        print (`
        Dada a medida do ângulo, sendo ${angulo}°. Ele não pertence a nenhum quadrante, mas sim ao eixo que separa
        o terceiro e o quarto no plano cartesiano.`);
    } else if(Eh_Maior_Q_270_E_Menor_Q_360(angulo)) {
        print (`
        Dada a medida do ângulo, sendo ${angulo}°. Ele pertence ao quarto quadrante do plano cartesiano.`);
    } else {
        print (`
        Dada a medida do ângulo, sendo ${angulo}°. Ele não pertence a nenhum quadrante, mas sim ao eixo que separa
        o quarto e o primeiro no plano cartesiano.`);
    }	
}

function Eh_Igual0(angulo) {
    return angulo === 0;
}

function Eh_Maior_Q_0_E_Menor_Q_90(angulo) {
    return angulo > 0 && angulo < 90;
}

function Eh_Igual90(angulo) {
    return angulo === 90;
}

function Eh_Maior_Q_90_E_Menor_Q_180(angulo) {
    return angulo > 90 && angulo < 180;
}

function Eh_Igual180(angulo) {
    return angulo === 180
}

function Eh_Maior_Q_180_E_Menor_Q_270(angulo) {
    return angulo > 180 && angulo < 270;
}

function Eh_Igual270(angulo) {
    return angulo === 270
}

function Eh_Maior_Q_270_E_Menor_Q_360(angulo) {
    return angulo > 270 && angulo < 360;
}

main();