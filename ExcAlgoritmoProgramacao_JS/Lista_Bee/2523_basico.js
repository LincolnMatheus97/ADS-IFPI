import { question } from "readline-sync";

function main() {
    let a = get_Text();

    while (a !== ``) {
        let n = get_Number();
        let entradas = get_Text().split(` `).map(Number);
        let palavraformada = ``;

        for (let i = 0; i < n; i++) {
            let indexLetra = entradas[i] - 1;
            palavraformada += `${a[indexLetra]}`;
        }
        print(palavraformada);
        a = get_Text();
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