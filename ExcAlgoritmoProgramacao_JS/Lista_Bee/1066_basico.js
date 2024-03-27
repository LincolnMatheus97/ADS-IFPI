import { question } from "readline-sync";

function main() {
    let count = 1;
    let countPair = 0;
    let countOdd = 0;
    let countPositive = 0;
    let countNegative = 0;

    while (count <= 5) {
        let number = get_number();

        if (number % 2 === 0) {
            countPair++;
        } else {
            countOdd++;
        }

        if (number > 0) {
            countPositive++;
        } else if (number < 0) {
            countNegative++;
        }

        count++;
    }
    print(`${countPair} valor(es) par(es)`);
    print(`${countOdd} valor(es) impar(es)`);
    print(`${countPositive} valor(es) positivo(s)`);
    print(`${countNegative} valor(es) negativo(s)`);

}

function get_number() {
    return parseInt(question());
}

function print(texto) {
    return console.log(texto);
}

main();