import { question } from "readline-sync";

function main() {
    let quantidadeCasos = get_Number();
    let quantidadeAnao = 0, quantidadeElfo = 0, quantidadeHumano = 0, quantidadeMago = 0, quantidadeHobbit = 0;

    while (quantidadeCasos != 0) {
        let [nome, raca] = get_Text().split(` `);
        raca = raca.toUpperCase();

        if (raca === `A`) {
            quantidadeAnao++;

        } else if (raca === `E`) {
            quantidadeElfo++;

        } else if (raca === `H`) {
            quantidadeHumano++;

        } else if (raca === `M`) {
            quantidadeMago++;

        } else {
            quantidadeHobbit++;

        }

        quantidadeCasos--;

    }

    print(`${quantidadeHobbit} Hobbit(s)`);
    print(`${quantidadeHumano} Humano(s)`);
    print(`${quantidadeElfo} Elfo(s)`);
    print(`${quantidadeAnao} Anao(oes)`);
    print(`${quantidadeMago} Mago(s)`);

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