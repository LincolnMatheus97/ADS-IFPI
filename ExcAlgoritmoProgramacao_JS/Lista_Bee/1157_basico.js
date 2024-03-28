import { question } from "readline-sync";

function main() {
    const N = get_Number();
    let count = 1;

    while (count <= N) {
        if (N % count === 0) {
            print(count);
        }
        count++;
    }
}

function get_Number() {
    return parseInt(question());
}

function print(texto) {
    return console.log(texto);
}

main();