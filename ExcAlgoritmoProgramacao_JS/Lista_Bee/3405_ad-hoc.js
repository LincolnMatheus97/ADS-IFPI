import { question } from "readline-sync";

function main () {
    let n = get_Number();
    let zeros = 0;

    while (n > 0) {
        n = Math.floor(n / 5);
        zeros = zeros + n;
    }

    print(zeros);
}

function get_Number() {
    return parseInt(question());
}

function print(texto) {
    return console.log(texto);
}

main();