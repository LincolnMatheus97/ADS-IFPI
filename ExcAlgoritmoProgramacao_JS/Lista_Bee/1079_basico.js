import { question } from "readline-sync";

function main() {
    const N = get_number();

    let contador = 1;

    while (contador <= N) {
        let notas_alunos = get_text();

        let notas = notas_alunos.split(` `);
        let nota_1 = parseFloat(notas[0]);
        let nota_2 = parseFloat(notas[1]);
        let nota_3 = parseFloat(notas[2]);

        let media_ponderada = ((nota_1 * 2) + (nota_2 * 3) + (nota_3 * 5)) / 10;

        print(`${media_ponderada.toFixed(1)}`);

        contador++;
    }
}

function get_number() {
    return parseFloat(question());
}

function get_text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();