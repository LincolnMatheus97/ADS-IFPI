import { question } from "readline-sync";

function main() {
    let [movimento, quantidade] = get_Text().split(` `);
    let countMovimentos = 0;
    let quantidadeTuristas = 0;

    while (movimento !== `ABEND`) {
        let totalTuristas = parseInt(quantidade);

        if (movimento === `SALIDA`) {
            countMovimentos++;
            quantidadeTuristas += totalTuristas;
        } else {
            countMovimentos--;
            quantidadeTuristas -= totalTuristas;
        }

        [movimento, quantidade] = get_Text().split(` `);
    }

    print(quantidadeTuristas);
    print(countMovimentos);

}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();