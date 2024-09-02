import { question } from "readline-sync";

function main() {
    let primeira_String = true;
    let quantidade_Strings = get_Number();

    while (quantidade_Strings !== 0) {
        let lista_String = [];

        if (!primeira_String) {
            print(``);
        }

        for (let i = 0; i < quantidade_Strings; i++) {
            lista_String.push(get_Text().trim().split(/\s+/).join(` `));
        }

        let tamanho_Maior_String = Math.max(...lista_String.map((string) => string.length));

        for (let string of lista_String) {
            print(string.padStart(tamanho_Maior_String, ` `));
        }

        primeira_String = false;
        quantidade_Strings = get_Number();
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