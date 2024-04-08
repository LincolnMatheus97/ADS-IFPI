import { question } from "readline-sync";

function main() {
    const NUMBER = Number(question(`Digite um numero qualquer: `));
    let howManyTimes = 1;
    let result = NUMBER / 2;

    while (result > 1) {
        result = result / 2;
        howManyTimes++;
    }
    console.log(`\nO resultado da última divisão é ${result} e foram feitas ${howManyTimes} divisões.\n`);
}

main();