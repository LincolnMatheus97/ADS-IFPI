import { get_number, print } from "../utils/io.js";

function main() {
    let numero_N = get_number(`Digite um numero N: `);
    let fatorial = fatorial_Recursiva(numero_N);
    print(`${fatorial}`)
}

function fatorial_Recursiva(n) {
    if (n <= 1) {
        return 1;
    }

    return n * fatorial_Recursiva(n - 1);
}

main();