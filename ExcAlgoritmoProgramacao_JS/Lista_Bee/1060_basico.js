import { question } from "readline-sync";

function main() {
    let positiveNumbers = 0;
    let i = 1;

    while (i <= 6) {
        let numbers = get_number();

        if (numbers > 0) {
            positiveNumbers++;
        }

        i++;
    }

    print(`${positiveNumbers} valores positivos`);
}

function get_number() {
    return Number(question());
}

function print(texto) {
    return console.log(texto);
}

main();