import { question } from "readline-sync";

function main () {
    let fatorias = [362880, 40320, 5040, 720, 120, 24, 6, 2, 1];
    let n = get_Number();
    let menor = 0;

    for (let fatorial of fatorias) {
        menor += Math.floor(n / fatorial);
        n = n % fatorial;
    }

    print(menor);
}

function get_Number() {
    return parseInt(question());
}

function print(texto) {
    return console.log(texto);
}

main();