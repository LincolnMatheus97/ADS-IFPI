import { question } from "readline-sync";

function main() {
    let numero = get_Text().trim();
    let numeroInvertido = '';

    for (let i = numero.length - 1; i >= 0; i--) {
        numeroInvertido += numero[i];
    }

    print(`${numeroInvertido}\n`);
}
function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();