import { question } from "readline-sync";

function main() {
    let a = get_Text();

    while (a !== ``) {
        let n = parseInt(a);
        print(Math.round(Math.log(n) / Math.log(2)));
        a = get_Text();

    }
}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();