/*
Leia as duas notas parciais obtidas por um aluno numa disciplina ao longo de um semestre, e calcule a
sua média. A atribuição de conceitos obedece à tabela abaixo:
Média de Aproveitamento Conceito
 Entre 9.0 e 10.0 A
 Entre 7.5 e 9.0 B
 Entre 6.0 e 7.5 C
 Entre 4.0 e 6.0 D
 Entre 4.0 e zero E
O algoritmo deve mostrar na tela as notas, a média, o conceito correspondente e a mensagem
“APROVADO” se o conceito for A, B ou C ou “REPROVADO” se o conceito for D ou E.
*/

import { get_number, print } from "../../utils/io_utils.js";

function main() {
    //Entrada
    const nota_1 = get_number(`
    ---> Digite sua primeira nota parcial: `);
    const nota_2 = get_number(`
    ---> Digite sua primeira nota parcial: `);

    //Processamento
    let media = (nota_1 + nota_2) / 2;
    let mensagem_1;
    let mensagem_2;

    if (Aprovado(media)) {
        mensagem_1 = `APROVADO.`;

        if (Media_Entre_AeB(media)) {
            mensagem_2 = `${(Media_A(media)) ? `A` : `B`}`;

        } else {
            mensagem_2 = `C`;

        }
    } else {
        mensagem_1 = `REPROVADO.`;

        if (Media_Entre_DeE(media)) {
            mensagem_2 = `${(Media_D(media)) ? `D` : `E`}`;

        }
    }

    //Saída
    print(`
    --------------------------------------------------
    #### BOLETIM BIMESTRAL ####
    ---> Nota 1:    ${nota_1}
    ---> Nota 2:    ${nota_2}
    ____________________________________
    ---> Média:     ${media}
    ---> Conceito:  ${mensagem_2}
    
    ---> Situação:  ${mensagem_1}
    
    ---------------------------------------------------`);
}

function Aprovado(media) {
    return (media > 6.0 && media <= 10);
}

function Media_A(media) {
    return (media > 9.0 && media <= 10);
}

function Media_D(media) {
    return (media > 4.0 && media <= 6);
}

function Media_Entre_AeB(media) {
    return (media > 7.5 && media <= 10);
}

function Media_Entre_DeE(media) {
    return (media > 6.0 && media <= 0);
}

main();