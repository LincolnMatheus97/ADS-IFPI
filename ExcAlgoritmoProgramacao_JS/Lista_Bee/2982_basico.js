import { question } from "readline-sync";

function main() {
    let quantidadeCasos = get_Number();
    let valorVerba = 0, valorGasto = 0;

    while (quantidadeCasos != 0) {
        let dados = get_Text().split(` `);
        let decicao = dados[0].toUpperCase();
        let valorDecicao = parseInt(dados[1]);

        if (decicao === `V`) {
            valorVerba += valorDecicao;

        } else {
            valorGasto += valorDecicao;

        }
        quantidadeCasos--;

    }

    valorVerba > valorGasto ? print(`A greve vai parar.`) : print(`NAO VAI TER CORTE, VAI TER LUTA!`);

}

function get_Number() {
    return Number(question());
}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();