import { question } from "readline-sync";

function main() {
    const A = get_number();
    const B = get_number();
    const C = get_number();
    const D = get_number();

    let DIFERENCA = Diferenca(A, B, C, D);

    print(`DIFERENCA = ${DIFERENCA}`);
}

function get_number() {
    return Number(question(`Numero: `));
}

function print(texto) {
    return console.log(texto);
}

function Diferenca(A, B, C, D) {
    let DIF;

    DIF = (A * B - C * D);

    return DIF;
}

main();