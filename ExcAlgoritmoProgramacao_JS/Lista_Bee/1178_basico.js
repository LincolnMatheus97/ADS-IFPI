import { question } from "readline-sync";

function main() {
    const N = 100;
    const X = get_Number();
    let x = X;

    for (let i = 0; i < N; i++) {
        print(`N[${i}] = ${(x.toFixed(4))}`);

        x /= 2;

    }

}

function get_Number() {
    return parseFloat(question());
}

function print(texto) {
    return console.log(texto);
}

main();