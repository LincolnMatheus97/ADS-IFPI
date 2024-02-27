/*
Leia duas notas de um aluno e escreva na tela a palavra “Aprovado” se a média das duas notas for maior
ou igual a 7,0. Caso a média seja inferior a 7,0, o programa deve ler a nota do exame e calcule a média
final. Se esta média for maior ou igual a 5,0, o programa deve escreva “Aprovado”, caso contrário deve
escreva “Reprovado”.
*/

import { print, get_number } from "../../utils/io_utils.js";

function main() {
    //Entrada
    const nota1 = get_number(`
    ---/ Digite sua primeira nota: `);
    const nota2 = get_number(`
    ---/ Digite sua segunda nota: `);

    //Processamento e Saída
    const media = (nota1 + nota2) / 2;
    if (Aprovado_Media(media)) {
        print(`
        #### APROVADO POR MÉDIA #### 
        ---- Nota1: ${nota1}
        ---- Nota2: ${nota2}
        _____________________________
        ---- Média: ${media} `);
    } else {
        const { resultado } = ProvaFinal(nota1, nota2, media);
        print(`
        ${resultado} `);
    }

}

function Ultimanota() {
    const notafinal = get_number(`
    ---/ Digite sua nota do exame final: `);
    return notafinal;
}

function Aprovado_Media(media) {
    return media >= 7.0;
}

function ProvaFinal(nota1, nota2, media) {
    let resultado;
    const solicitarnota = Ultimanota();
    const media_2 = (solicitarnota + media) / 2;
    if (media_2 >= 5.0) {
        resultado = (`
            #### APROVADO POR MÉDIA FINAL #### 
            ---- Nota1: ${nota1}
            ---- Nota2: ${nota2}
            _____________________________
            ---- Média: ${media} 
            ---- Média Final: ${media_2}`);

    } else {
        resultado = (`
            #### REPROVADO POR MÉDIA FINAL #### 
            ---- Nota1: ${nota1}
            ---- Nota2: ${nota2}
            _____________________________
            ---- Média: ${media} 
            ---- Média Final: ${media_2}`);

    }
    return resultado
}

main();