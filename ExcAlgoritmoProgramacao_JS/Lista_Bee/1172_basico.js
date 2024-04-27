import { question } from "readline-sync";

function main() {
    const N = 10;

    for (let i = 0; i < N; i++) {
        let valor = get_Number();

        if (valor <= 0) {
            print(`X[${i}] = 1`);

        } else {
            print(`X[${i}] = ${valor}`);

        }
    }
}

function get_Number() {
    return Number(question());
}

function print(texto) {
    return console.log(texto);
}

main();