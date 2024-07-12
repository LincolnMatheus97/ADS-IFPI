import { question } from "readline-sync";

function main() {
    let numero = get_Text();
    let numeroAzarado = false;

    for (let i = 0; i < numero.length; i++) {
        if (numero[i] === `1` && numero[i + 1] === `3`) {
            numeroAzarado = true;
            break;

        }

    }

    if (numeroAzarado) {
        print(`${numero} es de Mala Suerte`);

    } else {
        print(`${numero} NO es de Mala Suerte`);

    }

}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);

}
main();