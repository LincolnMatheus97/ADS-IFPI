import { question } from "readline-sync"

function main() {
    const numero = get_number();
    let impares = 1;

    if (Eh_Valido(numero)) {
        while (impares <= numero) {

            if (!(impares % 2 === 0)) {
                print(impares)

            }
            impares++
        }
    }
}

function get_number() {
    return parseInt(question());
}

function print(texto) {
    return console.log(texto)
}

function Eh_Valido(numero) {
    return (numero >= 1 && numero <= 1000);
}

main();