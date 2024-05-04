import { question } from "readline-sync";

function main() {
    let n = get_Number();
    let fibonacciRapido = (((1 + 5 ** 0.5) / 2) ** n - ((1 - 5 ** 0.5) / 2) ** n) / 5 ** 0.5;
    print(fibonacciRapido.toFixed(1));
}

function get_Number() {
    return Number(question());
}

function print(texto) {
    console.log(texto);
}

main();