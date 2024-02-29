/*
Leia 2 (duas) notas parciais de um aluno, calcule a média e escreva a mensagem:
o "Aprovado", se a média alcançada for maior ou igual a sete;
o "Reprovado", se a média for menor do que sete;
o "Aprovado com Distinção", se a média for igual a dez.
*/

import { get_number, print } from "../../utils/io_utils.js";

function main() {
    //Entrada
    const nota1 = get_number(`
    ---> Digite sua Nota: `);
    const nota2 = get_number(`
    ---> Digite sua Nota: `);

    //Processamento
    const media = (nota1 + nota2) / 2;
    let mensagem;

    if (Eh_Aprov(media)) {
        mensagem = `${media === 10 ? `Aprovado com Distinção` : `Aprovado`}`
    } else {
        mensagem = `Reprovado`
    }

    //Saída
    print(`
    -----------------------------------------------------
    #####       BOLETIM         ##### 
        
        Você foi ${mensagem}!
        
        Nota 1: ${nota1.toFixed(2)}
        Nota 2: ${nota2.toFixed(2)}
        -------------------
        Média: ${media.toFixed(2)}
        
    -----------------------------------------------------`);
}

function Eh_Aprov(media) {
    return (media >= 7 && media <= 10);
}

main();