import { question } from "readline-sync";

function main() {
    const quantidadePorcoes = [300, 1_500, 600, 1000, 150];
    let porcaoTotal = 0;

    for (let i = 0; i < 5; i++) {
        let porcao = get_Number();
        porcaoTotal += quantidadePorcoes[i] * porcao;

    }

    print(porcaoTotal + 225);

}

function get_Number() {
    return Number(question());
}

function print(texto) {
    return console.log(texto);
}

main();