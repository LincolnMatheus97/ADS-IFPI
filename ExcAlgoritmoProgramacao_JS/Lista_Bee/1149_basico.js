import { question } from "readline-sync";

function main() {
    const NUMBERS = get_Text().split(` `);

    let a = parseInt(NUMBERS[0]);
    let n = parseInt(NUMBERS[NUMBERS.length - 1]);
    let sum = a;
    let count = 1;

    while(count < n) {
        a++;
        sum += a;
        count++;
    }

    
    print(sum);
}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();