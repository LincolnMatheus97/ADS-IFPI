import { question } from "readline-sync";

function main() {
    let n = get_Number();
    let p = n / Math.log(n);
    let m = 1.25506 * p;

    print(`${p.toFixed(1)} ${m.toFixed(1)}`);
}

function get_Number() {
    return Number(question());
}

function print(texto) {
    return console.log(texto);
}

main();