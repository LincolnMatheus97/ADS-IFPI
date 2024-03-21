import { question } from "readline-sync";

function main() {
    const X = get_number();
    const Y = get_number();

    let min = Math.min(X, Y);
    let max = Math.max(X, Y);

    let somatorio = 0;
    if(!(max % 2 === 0)) {
        max = max - 1;
    }
     
    while (max > min) {
        if (!(max % 2 === 0)) {
            somatorio += max;
        }

        max--;
    }
    print(somatorio);
}

function get_number() {
    return parseInt(question());
}

function print(texto) {
    return console.log(texto);
}

main();