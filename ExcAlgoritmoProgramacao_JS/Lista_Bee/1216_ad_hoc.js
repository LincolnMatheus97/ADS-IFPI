import { question } from "readline-sync";

function main() {
    let nomeAmigo = get_Text();
    let distanciaTotal = 0, totalAmigos = 0;

    while (nomeAmigo !== "") {
        totalAmigos++;
        let distanciaCasa = get_Number();
        distanciaTotal += distanciaCasa;
        nomeAmigo = get_Text();
    }

    let distanciaMedia = (distanciaTotal / totalAmigos);
    print(`${distanciaMedia.toFixed(1)}`);
}

function get_Number() {
    return parseInt(question());
}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();