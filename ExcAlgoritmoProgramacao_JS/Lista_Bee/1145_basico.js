import { question } from "readline-sync";

function main() {
    const NUMBERS = get_Text().split(` `);

    let x = parseInt(NUMBERS[0]);
    let y = parseInt(NUMBERS[1]);
    let countY = 1;
    let countX = 1;
    let untilY = Math.floor(y / x);

    if (x > 1 && x < 20) {
        if (y > x && y < 100_000) {
            while (countY <= untilY) {
                sequence(countX, x);
                countX += x;
                countY++;
            }
        }
    }
}

function get_Text() {
    return question();
}

function sequence(numb1, numb2) {
    let message = ``;
    let count = 1;
    let until = numb2;
    let newNumber = numb1

    while (count <= until) {
        message += `${newNumber}`;
        if (count < until) {
            message += ` `;
        }
        count++;
        newNumber++;
    }

    print(message);
}

function print(texto) {
    return console.log(texto);
}

main();