import { question } from "readline-sync";

function main() {
    let tS = get_Text().split(` `).map(Number);
    let tomadas = 1;

    for (let i = 0; i < tS.length; i++) {
        tomadas += (tS[i] - 1);

    }
    print(tomadas);
}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();