import { question } from "readline-sync"

function main() {
    const numero = get_number();
    let inicio = numero;
    let limite_min = 0;

    while (limite_min !== 6) {
        if (!(inicio % 2 === 0)) {
            print(inicio);
            limite_min++;
        }
        inicio++
    }
}

function get_number() {
    return parseInt(question());
}

function print(texto) {
    return console.log(texto);
}

main();