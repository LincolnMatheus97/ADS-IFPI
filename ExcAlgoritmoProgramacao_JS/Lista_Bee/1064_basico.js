import { question } from "readline-sync";

function main() {
    let count = 1;
    let sumPostive = 0;
    let countPositive = 0;

    while (count <= 6) {
        let number = get_number();
        if (number > 0) {
            sumPostive += number;
            countPositive++;
        }
        count++;
    }

    let avarage = sumPostive / countPositive;

    print(`${countPositive} valores positivos`);
    print(avarage.toFixed(1));
}

function get_number() {
    return Number(question());
}

function print(texto) {
    return console.log(texto);
}

main();