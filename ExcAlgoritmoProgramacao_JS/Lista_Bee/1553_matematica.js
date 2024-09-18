import { question } from "readline-sync";

function main() {
    let entrada = get_Text();

    while (entrada !== ``) {
        let [n, m] = entrada.split(` `).map(Number);
        let fib = fibonacci(n);
        let fib_N = fibonacci(fib);
        let resto = fib_N % m;
        
        print(resto);

        entrada = get_Text();
    }
}

function get_Text() {
    return question();
}

function fibonacci(n) {
    if (n === 1 || n === 2) {
        return 1;
    }

    let a = 1, b = 1;
    for (let i = 3; i <= n; i++) {
        let soma = a + b;
        a = b;
        b = soma;
    }

    return b;
}

function print(texto) {
    return console.log(texto);
}

main();