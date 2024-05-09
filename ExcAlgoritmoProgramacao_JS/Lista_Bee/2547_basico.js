import { question } from "readline-sync";

function main() {
    let a = get_Text();

    while (a !== ``) {
        let [n, min, max] = a.split(` `).map(Number);
        let acesso = 0;

        for (let i = 0; i < n; i++) {
            let altura = get_Number();
            if (altura >= min && altura <= max) {
                acesso++;
            }
        }
        print(acesso);

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