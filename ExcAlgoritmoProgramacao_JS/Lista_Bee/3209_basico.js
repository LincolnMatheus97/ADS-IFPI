import { question } from "readline-sync";

function main() {
    let quantidade_Caso = get_Number();

    while (quantidade_Caso !== 0) {
        let numeros = get_Text().split(` `).map(Number);
        let somatorio = 0;

        for (let i = 1; i < numeros.length; i++) {
            somatorio += numeros[i];

        }

        let numero_Tomadas = somatorio - numeros[0] + 1;
        print(numero_Tomadas);
        quantidade_Caso--;

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