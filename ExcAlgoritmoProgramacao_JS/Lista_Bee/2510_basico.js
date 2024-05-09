import { question } from "readline-sync";

function main() {
    const N = get_Number();

    for (let i = 0; i < N; i++) {
        let vilao = get_Text();
        print(`Y`);
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