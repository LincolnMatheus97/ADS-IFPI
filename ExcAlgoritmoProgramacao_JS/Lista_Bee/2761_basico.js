import { question } from "readline-sync";

function main() {
    let frase = get_Text();
    let [int, decimal, chr, str] = frase.match(/(-?\d+) (-?\d+\.\d+) (.) ([\w\s]+)$/s);

    let palavraFlutuante = Math.fround(Number.parseFloat(decimal)).toFixed(6);
    let todos = [int, palavraFlutuante, chr, str];

    print(todos.join(``));
    print(todos.join(`\t`));
    print(todos.map(s => s.padStart(10, ` `)).join(``));
}

function get_Text() {
    return question();
}

function print(texto) {
    console.log(texto);
}

main();