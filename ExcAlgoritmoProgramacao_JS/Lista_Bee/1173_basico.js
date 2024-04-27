import { question } from "readline-sync";

function main() {
    const N = 10;
    const V = get_Number();

    if (V <= 50) {
        let v = V;

        for (let i = 0; i < N; i++) {

            print(`N[${i}] = ${v}`);

            v *= 2;
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