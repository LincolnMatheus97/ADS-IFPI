import { question } from "readline-sync";

function main() {
    const N = get_number();
    if (N_Valido(N)) {
        let contador = 1;

        while (contador <= N) {
            let X = get_number();
            if (X_Valido(X)) {
                if (X > 0) {
                    X = (X % 2 === 0) ? `EVEN POSITIVE` : `ODD POSITIVE`;
                } else if (X < 0) {
                    X = (X % 2 === 0) ? `EVEN NEGATIVE` : `ODD NEGATIVE`;
                } else {
                    X = `NULL`
                }
                print(`${X}`);
                contador++;
            }
        }
    }
}

function get_number() {
    return parseInt(question());
}

function print(texto) {
    return console.log(texto);
}

function N_Valido(numero) {
    return (numero < 10_000);
}

function X_Valido(numero) {
    return (numero > -(10 ** 7) && numero < (10 ** 7));
}

main();