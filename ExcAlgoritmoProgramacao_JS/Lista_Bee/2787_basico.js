import { question } from "readline-sync";

function main() {
    const l = get_Number();
    const c = get_Number();

    if ((l % 2 === 0 && c % 2 !== 0) || (l % 2 !== 0 && c % 2 === 0)) {
        print(`0`);
    } else {
        print(`1`);
    }

}

function get_Number() {
    return Number(question());
}

function print(texto) {
    return console.log(texto);
}

main();