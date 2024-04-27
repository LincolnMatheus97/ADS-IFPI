import { question } from "readline-sync";

function main() {
    const N = 100;

    for (let i = 0; i < N; i++) {
        let valor = get_Number();

        if (valor <= 10) {
            print(`A[${i}] = ${valor.toFixed(1)}`);

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