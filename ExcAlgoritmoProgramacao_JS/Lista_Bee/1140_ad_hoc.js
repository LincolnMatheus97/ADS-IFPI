import { question } from "readline-sync";

function main() {
    let expressao = "";

    while (expressao !== "*") {
        expressao = get_Text();
        if (expressao !== "*") {
            let resultado = tautograma(expressao);
            print(resultado);
        }
    }
}

function tautograma(frase) {
    let palavras = frase.split(" ");
    let letra = palavras[0][0].toLowerCase();
    for (let i = 1; i < palavras.length; i++) {
        if (palavras[i][0].toLowerCase() !== letra) {
            return "N";
        }
    }
    return "Y";
}

function print(texto) {
    return console.log(texto);
}

function get_Text() {
    return question();
}

main();