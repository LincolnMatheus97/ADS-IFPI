import { question } from "readline-sync";

function main() {
    const N = 1_000;
    const T = get_Number();

    if (T >= 2 && T <= 50) {
        let t = 0;
        for (let i = 0; i < N; i++) {
            if (t === T) {
                t = 0;
            }
            print(`N[${i}] = ${t}`);
            t++;

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