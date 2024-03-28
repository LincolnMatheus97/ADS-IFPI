import { question } from "readline-sync";

function main() {

    while (true) {
        let x = get_Number();

        if (x === 0) {
            break;
        }
        let sum = consecutiveOddSum(x);
        print(sum);
    }
}

function get_Number() {
    return parseInt(question());
}

function consecutiveOddSum(numb) {
    let sum = 0;
    let current = numb;
    let count = 1;

    while (count <= 5) {
        if (current % 2 === 0) {
            sum += current;
            count++;
        }
        current++;
    }
    return sum;
}

function print(texto) {
    return console.log(texto);
}

main();