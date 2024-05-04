import { question } from "readline-sync";

function main() {
    let senhaIncorreta = get_Text();

    while (senhaIncorreta !== ``) {
        let senhaCorreta = parseInt(senhaIncorreta) - 1;
        print(senhaCorreta);
        senhaIncorreta = get_Text();
    }
}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();