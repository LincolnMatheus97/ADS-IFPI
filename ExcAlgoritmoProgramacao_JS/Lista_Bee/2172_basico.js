import { question } from "readline-sync";

function main() {
    let entradas = get_Text();

    while (entradas !== `0 0`) {
        let [x, m] = entradas.split(` `).map(Number);
        print(x * m);
        entradas = get_Text();
    }
}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();