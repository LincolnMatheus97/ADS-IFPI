/*
Leia a medida de um ângulo (entre 0 e 360°) e escreva o quadrante (primeiro, segundo, terceiro ou
quarto) em que o ângulo se localiza.
*/

import { get_number, print } from "../../utils/io_utils.js";

function main() {
    //Entrada
    const angulo = get_number("Digite a medida de angulo (entre 0 e 360): ");

    //Processamento e Saída
    let mensagem_1;
    let mensagem_2;
    let quadrante;

    if (Eh_Igual0_Ou_360(angulo) || Eh_Igual90(angulo) || Eh_Igual180(angulo) || Eh_Igual270(angulo)) {
        if (Eh_Igual0_Ou_360(angulo)) {
            mensagem_1 = `Primeiro`;
            mensagem_2 = `Quarto`;

        } else if (Eh_Igual90(angulo)) {
            mensagem_1 = `Primeiro`;
            mensagem_2 = `Segundo`;

        } else if (Eh_Igual180(angulo)) {
            mensagem_1 = `Segundo`;
            mensagem_2 = `Terceiro`;

        } else {
            mensagem_1 = `Terceiro`;
            mensagem_2 = `Quarto`;

        }
        print(`
        -----------------------------------------------------------------------------------------------------------------
            Dada a medida do ângulo, sendo ${angulo}°. Ele não pertence a nenhum quadrante, mas sim ao eixo que separa
            o ${mensagem_1} e o ${mensagem_2} no plano cartesiano.
        -----------------------------------------------------------------------------------------------------------------`);
    } else {
        if (Eh_Maior_Q_0_E_Menor_Q_90(angulo)) {
            quadrante = `Primeiro`;

        } else if (Eh_Maior_Q_90_E_Menor_Q_180(angulo)) {
            quadrante = `Segundo`;

        } else if (Eh_Maior_Q_180_E_Menor_Q_270(angulo)) {
            quadrante = `Terceiro`;

        } else {
            quadrante = `Quarto`;

        }
        print(`
        -----------------------------------------------------------------------------------------------------------------
            Dada a medida do ângulo, sendo ${angulo}°. Ele pertence ao ${quadrante} quadrante do plano cartesiano.
        -----------------------------------------------------------------------------------------------------------------`);
    }
}

function Eh_Igual0_Ou_360(angulo) {
    return (angulo === 0 || angulo === 360);
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
    return angulo === 180;
}

function Eh_Maior_Q_180_E_Menor_Q_270(angulo) {
    return angulo > 180 && angulo < 270;
}

function Eh_Igual270(angulo) {
    return angulo === 270;
}

function Eh_Maior_Q_270_E_Menor_Q_360(angulo) {
    return angulo > 270 && angulo < 360;
}

main();