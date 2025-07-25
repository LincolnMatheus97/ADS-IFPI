import { question } from "readline-sync";

function main() {
    let clicksTerceiroLink = getNumber(); print(clicksTerceiroLink * Math.pow(2, 2));
}

function getNumber() {
    return parseInt(question());
}

function print(texto) {
    return console.log(texto);
}

main();