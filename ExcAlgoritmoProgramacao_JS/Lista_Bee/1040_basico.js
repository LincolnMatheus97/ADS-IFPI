import { question } from "readline-sync";

function main() {
    const notas = get_number();

    let Nnotas = notas.split(` `);
    let nota1 = parseFloat(Nnotas[0]);
    let nota2 = parseFloat(Nnotas[1]);
    let nota3 = parseFloat(Nnotas[2]);
    let nota4 = parseFloat(Nnotas[3]);

    let media = Calcular_Media(nota1, nota2, nota3, nota4);

    if (Eh_Aprovado(media)) {
        print(`Media: ${media.toFixed(1)}`);
        print(`Aluno aprovado.`);

    } else if (Eh_Exame(media)) {
        print(`Media: ${media.toFixed(1)}`);
        print(`Aluno em exame.`);

        const nota5 = parseFloat(get_number());
        ;
        let media_exame = Calcular_MediaExame(media, nota5);
        print(`Nota do exame: ${nota5.toFixed(1)}`)
        if (media_exame >= 5.0) {
            print(`Aluno aprovado.`);
        } else {
            print(`Aluno reprovado.`);
        }
        print(`Media final: ${media_exame.toFixed(1)}`);

    } else if (Eh_Reprovado(media)) {
        print(`Media: ${media.toFixed(1)}`);
        print(`Aluno reprovado.`);
    }
}

function get_number() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

function Calcular_Media(nota1, nota2, nota3, nota4) {
    return (((nota1 * 2) + (nota2 * 3) + (nota3 * 4) + (nota4 * 1)) / (2 + 3 + 4 + 1));
}

function Eh_Aprovado(media) {
    return (media >= 7.0);
}

function Eh_Reprovado(media) {
    return (media < 5.0);
}

function Eh_Exame(media) {
    return (media >= 5.0 && media <= 6.9);
}

function Calcular_MediaExame(media, nota) {
    return ((media + nota) / 2);
}

main();