import { question } from "readline-sync";

function main() {
    const N = get_number();

    if (N_Valido(N)) {
        let n_valido = N;
        let contador = 0;
        let dentro = 0;
        let fora = 0;

        while (contador !== n_valido) {
            let X = get_number();
            if (X_Valido(X)) {
                if (X >= 10 && X <= 20) {
                    dentro++;
                } else {
                    fora++;
                }
            }
            contador++;
        }
        print(`${dentro} in`);
        print(`${fora} out`)
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