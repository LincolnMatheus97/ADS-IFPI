import { question } from "readline-sync";

function main() {
    let quantidade_Casos = get_Number();

    for (let i = 0; i < quantidade_Casos; i++) {
        let caso = get_Text().toLowerCase().split(``);
        caso = caso.filter(caracter => caracter >= `a` && caracter <= `z`);
        let letras_Iguais = new Array(26).fill(0);
        let mais_Repetidos = 0;

        for (let caracter of caso) {
            let indice = caracter.charCodeAt(0) - 97;
            letras_Iguais[indice] += 1;
            if (letras_Iguais[indice] > mais_Repetidos) {
                mais_Repetidos = letras_Iguais[indice];
            }
        }

        let letras_Mais_Frequentes = [];
        for (let m = 0; m < 26; m++) {
            if (letras_Iguais[m] === mais_Repetidos) {
                letras_Mais_Frequentes.push(String.fromCharCode(m + 97));
            }
        }

        print(letras_Mais_Frequentes.join(``));
    }
}

function get_Number() {
    return Number(question());
}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();