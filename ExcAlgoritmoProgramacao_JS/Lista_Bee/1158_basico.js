import { question } from "readline-sync";

function main() {
    const N = get_Number();
    let countN = 1;

    while (countN <= N) {
        let numbers = get_Text().split(` `);
        let x = parseInt(numbers[0]);
        let y = parseInt(numbers[1]);

        let sum = consecutiveOddSum(x, y);
        print(sum);
        countN++;
    }
}

function get_Number() {
    return parseInt(question());
}

function get_Text() {
    return question();
}

function consecutiveOddSum(numb1, numb2) {
    let sum = 0;
    let current = numb1;

    while (numb2 > 0) {
        if (current % 2 !== 0) {
            sum += current;
            numb2--;
        }
        current++;
    }
    return sum;
}

function print(texto) {
    return console.log(texto);
}

main();