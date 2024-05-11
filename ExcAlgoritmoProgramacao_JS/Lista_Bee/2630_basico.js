import { question } from "readline-sync";

function main() {
    const N = get_Number();
    let count = 0;

    for (let i = 0; i < N; i++) {
        let conversao = get_Text();
        let [r, g, b] = get_Text().split(` `).map(Number);
        let p = 0;

        if (conversao === `min` || conversao === `max`) {
            conversao === `min` ? p = Math.min(r, g, b) : p = Math.max(r, g, b);

        } else if (conversao === `eye`) {
            p = 0.30 * r + 0.59 * g + 0.11 * b;

        } else {
            p = (r + g + b) / 3;

        }
        count ++;
        print(`Caso #${count}: ${Math.floor(p)}`);
        p = 0;

    }
}

function get_Number() {
    return Number(question());
}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();