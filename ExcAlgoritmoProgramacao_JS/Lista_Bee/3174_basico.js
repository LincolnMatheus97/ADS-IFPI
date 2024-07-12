import { question } from "readline-sync";

function main() {
    let quantidadeCaso = get_Number();
    let horasTotalBoneco = 0, horasTotalArquiteto = 0, horasTotalMusica = 0, horasTotalDesenhista = 0;
    while (quantidadeCaso !== 0) {
        let [nome, grupo, horas] = get_Text().split(` `);
        let horasTrabalhadas = parseInt(horas);

        if (grupo === `bonecos`) {
            horasTotalBoneco += horasTrabalhadas;

        } else if (grupo === `arquitetos`) {
            horasTotalArquiteto += horasTrabalhadas;

        } else if (grupo === `musicos`) {
            horasTotalMusica += horasTrabalhadas;

        } else {
            horasTotalDesenhista += horasTrabalhadas;

        }

        quantidadeCaso--;

    }

    let quantidadeBrinquedos = (Math.floor(horasTotalBoneco / 8)) + (Math.floor(horasTotalArquiteto / 4)) + (Math.floor(horasTotalMusica / 6)) + (Math.floor(horasTotalDesenhista / 12));
    print(quantidadeBrinquedos);

}

function get_Text() {
    return question();
}

function get_Number() {
    return Number(question());
}

function print(texto) {
    return console.log(texto);
}

main();