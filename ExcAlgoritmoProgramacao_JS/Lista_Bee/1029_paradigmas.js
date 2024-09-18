import { question } from "readline-sync";

let fib_N = 0;

function main() {
    let casos = get_Number();

    for (let i = 0; i < casos; i++) {
        let n = get_Number();
        fib_N = 0;
        let quantidade_Chamada = sequencia_Recursiva(n);
        print(`fib(${n}) = ${fib_N - 1} calls = ${quantidade_Chamada}`);
    }
}

function get_Number() {
    return parseInt(question());
}

function sequencia_Recursiva(n) {
    fib_N++;

    if (n <= 1) {
        return n;
    }
    return sequencia_Recursiva(n - 1) + sequencia_Recursiva(n - 2);
}

function print(texto) {
    return console.log(texto);
}

main();