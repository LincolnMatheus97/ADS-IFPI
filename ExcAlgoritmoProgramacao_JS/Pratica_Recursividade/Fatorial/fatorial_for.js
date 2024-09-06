import { get_number, print } from "../utils/io.js";

function main() {
    let numero_N = get_number(`Digite um numero N: `);
    let fatorial = 1;

    for (let i = 1; i <= numero_N; i++) {
        fatorial *= i;    
    }

    print(`${fatorial}`);
}

main();