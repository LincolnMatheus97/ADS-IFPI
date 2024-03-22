import { question } from "readline-sync";

function main() {
    const X = get_number();
    const Y = get_number();

    let max = Math.max(X, Y);
    let min = Math.min(X, Y);

    if (min % 5 === 2 || min % 5 === 3) {
        min = min + 1;
    }

    while (min < max) {
        if (min % 5 === 2 || min % 5 === 3) {
            print(`${min}`);
        }
        min++;
    }
}

function get_number() {
    return parseInt(question());
}

function print(texto) {
    return console.log(texto);
}

main();