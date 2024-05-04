import { question } from "readline-sync";

function main() {
    let N = get_Number();
    let alturas = get_Text().split(` `).map(Number);
    let tipoAnterior = '';
    let padraoQuebrado = false;

    for (let i = 1; i < N; i++) {
        if (alturas[i] > alturas[i - 1]) {
            if (tipoAnterior === 'pico') {
                padraoQuebrado = true;
                break;
            }
            tipoAnterior = 'pico';
        } else if (alturas[i] < alturas[i - 1]) {
            if (tipoAnterior === 'vale') {
                padraoQuebrado = true;
                break;
            }
            tipoAnterior = 'vale';
        } else {
            padraoQuebrado = true;
            break;
        }
    }

    print(padraoQuebrado ? `0` : `1`);
}

function get_Number() {
    return Number(question());
}

function get_Text() {
    return question();
}

function print(texto) {
    console.log(texto);
}

main();