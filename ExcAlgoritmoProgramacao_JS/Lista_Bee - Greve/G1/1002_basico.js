import { question } from "readline-sync";

function main() {
    const r = get_number();

    const pi = 3.14159;
    let area = pi * (r ** 2);

    print(`A = ${area.toFixed(4)}`);
}

function get_number() {
    return Number(question(`Raio: `));
}

function print(texto) {
    return console.log(texto);
}

main();