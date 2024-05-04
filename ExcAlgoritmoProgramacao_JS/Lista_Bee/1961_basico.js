import { question } from "readline-sync";

function main() {
    let saltoCanos = get_Text().split(` `).map(Number);
    let alturaCanos = get_Text().split(` `).map(Number);
    let vitoria = true;

    for (let i = 0; i < saltoCanos[1] - 1; i++) {
        if (Math.abs(alturaCanos[i] - alturaCanos[i + 1]) > saltoCanos[0]) {
            vitoria = false;
            break;
        }
    }

    if (vitoria === true) {
        print(`YOU WIN`);
    } else {
        print(`GAME OVER`);
    }

}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();