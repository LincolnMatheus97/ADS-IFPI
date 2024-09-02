import { question } from "readline-sync";

function main() {
    let quantidade_Casos = get_Number();

    for (let i = 0; i < quantidade_Casos; i++) {
        let string = get_Text().toUpperCase();
        let casas_Direita = get_Number();
        let nova_String = ``;

        for (let caracter of string) {
            let novo_Codigo = ((caracter.charCodeAt(0) - 65 - casas_Direita + 26) % 26) + 65;
            nova_String += String.fromCharCode(novo_Codigo);
        }

        print(nova_String);
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