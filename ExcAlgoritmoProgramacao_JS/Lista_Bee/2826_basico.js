import { question } from "readline-sync";

function main() {
    const palavra_1 = get_Text();
    const palavra_2 = get_Text();

    if (palavra_1 < palavra_2) {
        print(palavra_1);
        print(palavra_2);
    } else {
        print(palavra_2);
        print(palavra_1);
    }

}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();