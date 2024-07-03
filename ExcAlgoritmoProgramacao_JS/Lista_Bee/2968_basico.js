import { question } from "readline-sync";

function main() {
    let [numeroVoltas, quantidadePlacas] = get_Text().split(` `).map(Number);
    let placasPorMeta = ``;

    for (let i = 10; i <= 90; i += 10) {
        let totalPlacas = numeroVoltas * quantidadePlacas;
        let placasContadas = Math.ceil(percentual(totalPlacas, i));
        if (i > 10) {
            placasPorMeta += ` ${placasContadas}`;

        } else {
            placasPorMeta += `${placasContadas}`;

        }

    }
    print(placasPorMeta);

}

function get_Text() {
    return question();

}

function percentual(valor, percentil) {
    return valor * (percentil / 100);

}

function print(texto) {
    return console.log(texto);

}

main();