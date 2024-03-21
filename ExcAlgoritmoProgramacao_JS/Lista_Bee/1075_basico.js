import { question } from "readline-sync";

function main() {
    const N = get_number();

    if (N_Valido(N)) {
        let limite_min = 1;
        const limite_max = 10_000;

        while (limite_min <= limite_max) {
            if (limite_min % N === 2) {
                print(limite_min);
            }
            limite_min++
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
    return (numero < 10_000)
}

main();