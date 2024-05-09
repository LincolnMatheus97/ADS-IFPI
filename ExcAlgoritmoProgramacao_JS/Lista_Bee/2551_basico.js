import { question } from "readline-sync";

function main() {
    let a = get_Text();

    while (a !== ``) {
        let n = parseInt(a);
        let maior = 0;

        for (let i = 1; i <= n; i++) {
            let [t, d] = get_Text().split(` `).map(Number);
            if ((d / t) > maior) {
                print(i);
                maior = (d / t);
            }
        }
        a = get_Text();
    }
}

function get_Text() {
    return question();
}

function get_Number() {
    return Number(question());
}

function print(texto) {
    return console.log(texto);
}

main();