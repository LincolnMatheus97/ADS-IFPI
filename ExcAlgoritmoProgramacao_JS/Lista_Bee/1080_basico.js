import { question } from "readline-sync";

function main() {
    let limite_min = 1;
    let limite_max = 100;
    let maior = 0;
    let posicao = 0

    while (limite_min <= limite_max) {
        let numero = get_number();

        if (numero > maior) {
            maior = numero;
            posicao = limite_min;
        }

        limite_min++;
    }
    print(`${maior}`);
    print(`${posicao}`);
}

function get_number() {
    return parseInt(question());
}

function print(texto) {
    return console.log(texto);
}

main();