import { question } from "readline-sync";

function main() {
    const A = get_number();
    const B = get_number();

    let soma = A + B;

    print(`X = ${soma}`);
}

function get_number() {
    return Number(question(`Numero: `));
}

function print(texto) {
    return console.log(texto);
}

main();