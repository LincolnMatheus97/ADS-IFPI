import { question } from "readline-sync";

function main() {
    let palavra = get_Text();
    if (palavra.length >= 10) {
        print(`palavrao`);

    } else {
        print(`palavrinha`);

    }

}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();