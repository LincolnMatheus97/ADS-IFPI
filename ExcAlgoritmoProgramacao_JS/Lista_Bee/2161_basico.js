import { question } from "readline-sync";

function main() {
    const N = get_Number();
    let fracao = 0.0;
    for (let i = 1; i <= N; i++) {
        fracao = 1 / (6 + fracao);
    }

    print((fracao + 3).toFixed(10));
}

function get_Number() {
    return Number(question());
}

function print(texto) {
    return console.log(texto);
}

main();