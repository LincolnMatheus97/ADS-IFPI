import { question } from "readline-sync";

function main() {
    const N = get_Number();
    let count = 1;
    let current = 0;
    let successor = 1;
    let message = ``;

    if (N > 0 && N < 46) {
        message += `${current}`;
        message += ` `;
        message += `${successor}`;

        while (count <= N - 2) {
            let sum = current + successor;
            message += ` ${sum}`;
            
            current = successor;
            successor = sum;
            count++;
        }

        print(message);
    }
}

function get_Number() {
    return parseInt(question());
}

function print(texto) {
    return console.log(texto);
}

main();