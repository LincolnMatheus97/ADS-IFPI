import { question } from "readline-sync";

function main() {
    let quantidadeCasos = get_Number();

    for (let i = 1; i <= quantidadeCasos; i++) {
        let stringCaso = get_Text();
        let valorMetadeString = Math.floor(stringCaso.length / 2);

        let passada_1 = primeiraPassada(stringCaso);
        let passada_2 = segundaPassada(passada_1);

        let primeiraMetadeStringCaso = passada_2.slice(0, valorMetadeString);
        let segundaMetadeStringCaso = gerarSegundaMetadeStringCaso(passada_2, valorMetadeString);

        let passada_3 = primeiraMetadeStringCaso + segundaMetadeStringCaso;

        print(passada_3);
    }
}

function primeiraPassada(string) {
    let novaString = ``;

    for (let letra of string) {
        if ((letra >= `a` && letra <= `z`) || (letra >= `A` && letra <= `Z`)) {
            novaString += String.fromCharCode(letra.charCodeAt(0) + 3);
        } else {
            novaString += letra;
        }
    }
    return novaString;
}

function segundaPassada(string) {
    let stringInversa = ``;

    for (let letra of string) {
        stringInversa = letra + stringInversa;
    }
    return stringInversa;
}

function gerarSegundaMetadeStringCaso(string, valorMetade) {
    let segundaMetade = ``;
    let segundaParteDaString = string.slice(valorMetade);

    for (let letra of segundaParteDaString) {
        segundaMetade += String.fromCharCode(letra.charCodeAt(0) - 1);
    }
    return segundaMetade;
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