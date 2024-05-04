import { question } from "readline-sync";

function main() {
    let [embarque, tempoViagem, fuso] = get_Text().split(` `).map(Number);
    let totalTempo = embarque + tempoViagem + fuso;

    totalTempo >= 24 ? print(`${totalTempo - 24}`) : totalTempo < 0 ? print(`${totalTempo + 24}`) : print(`${totalTempo}`);
}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();