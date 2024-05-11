import { question } from "readline-sync";

function main() {
    const N = get_Number();

    for (let i = 1; i <= N; i++) {
        let x = get_Number();
        let binario = x.toString(2);
        let tamanhoX = binario.split(`0`).reduce((r, s) => r.length > s.length ? r : s, ``).length;
        print(tamanhoX);
    }
}

function get_Number() {
    return Number(question());
}

function print(texto) {
    return console.log(texto);
}

main();