import { question } from "readline-sync";

function main() {
    const N = get_Number();
    let fracao = 0.0;

    for (let i = 0; i < N; i++) {
        fracao = 1 / (2 + fracao);
    }

    print((fracao + 1).toFixed(10));
}

function get_Number() {
    return Number(question());
}

function print(texto) {
    console.log(texto);
}

main();