import { get_number, print } from "../utils/io.js";

function main() {
    let numero_N = get_number(`Digite um numero N: `);
    let fatorial = 1;

    while (numero_N > 1) {
        fatorial *= numero_N;
        numero_N--;
    }

    print(`${fatorial}`);
}

main();