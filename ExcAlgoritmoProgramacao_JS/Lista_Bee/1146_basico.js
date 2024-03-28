import { question } from "readline-sync";

function main() {

    while (true) {
        const X = get_Number();
        if (X === 0) {
            break;
        }

        sequence(X);
    }
}

function get_Number() {
    return parseInt(question());
}

function sequence(number) {
    let count = 1;
    let message = ``;

    while (count <= number) {
        message += `${count}`;
        if (count < number) {
            message += ` `;
        }
        count++;
    }
    print(message);
}

function print(texto) {
    return console.log(texto);
}

main();