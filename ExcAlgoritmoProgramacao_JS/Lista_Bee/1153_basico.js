import { question } from "readline-sync";

function main() {
    const N = get_Number();
    let factorial = N;
    let count = 1
    if(N > 0 && N < 13) {
        while (count < N) {
            factorial *= (N - count);
            count++;
        }
    }
    print(factorial);
}

function get_Number() {
    return parseInt(question());
}

function print(texto) {
    return console.log(texto);
}

main();