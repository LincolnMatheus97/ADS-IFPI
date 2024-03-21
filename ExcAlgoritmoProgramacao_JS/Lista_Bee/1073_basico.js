import { question } from "readline-sync";

function main() {
    const N = get_number();

    if (N_Valido(N)) {
        let contador = 1;
        
        while (contador <= N) {
            if (contador % 2 === 0) {
                let quadrado = contador ** 2;
                print(`${contador}^2 = ${quadrado}`)
            }
            contador++;
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
    return (numero > 5 && numero < 2000);
}

main();