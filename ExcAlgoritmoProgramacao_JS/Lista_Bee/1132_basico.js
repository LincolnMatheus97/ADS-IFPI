import { question } from "readline-sync";

function main() {
    const X = get_number();
    const Y = get_number();

    let max = Math.max(X, Y);
    let min = Math.min(X, Y);
    let somatorio = 0;

    while (min <= max) {
        if (!(min % 13 === 0)) {
            somatorio += min;
        }
        min++;
    }
    print(somatorio);
}

function get_number() {
    return parseInt(question());
}

function get_text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();