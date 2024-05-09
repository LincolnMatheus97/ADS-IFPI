import { question } from "readline-sync";

function main() {
    let n = get_Number();

    for(let i = 0; i < n; i++) {
        let perguntas = get_Text();
        print(`I am Toorg!`);
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