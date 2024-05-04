import { question } from "readline-sync";

function main() {
    let [p, j1, j2, r, a] = get_Text().split(` `).map(Number);
    let somatorio = j1 + j2;

    if (p === 1 && (somatorio % 2 === 0)) {
        if (r === 1 && a === 1) {
            print(`Jogador 2 ganha!`);
        } else {
            print(`Jogador 1 ganha!`);
        }
    } else if (p === 1 && !(somatorio % 2 === 0)) {
        if (r === 1 && a === 0) {
            print(`Jogador 1 ganha!`);
        } else {
            print(`Jogador 2 ganha!`);
        }
    } else if (p === 0 && !(somatorio % 2 === 0)) {
        if (r === 1 && a === 1) {
            print(`Jogador 2 ganha!`);
        } else {
            print(`Jogador 1 ganha!`);
        }
    } else if (p === 0 && (somatorio % 2 === 0)) {
        if (r === 1 && a === 0) {
            print(`Jogador 1 ganha!`);
        } else {
            print(`Jogador 2 ganha!`);
        }
    }
}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();