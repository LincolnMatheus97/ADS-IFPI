import { question } from "readline-sync";

function main() {
    const N = get_Number();
    let rpms = get_Text().split(` `).map(Number);
    let indice = 0;
    let quedaEncontrada = false;

    for (let i = 1; i < N; i++) {
        if (rpms[i] < rpms[i - 1]) {
            indice = i + 1;
            quedaEncontrada = true;
            break;
        }
    }
    print(quedaEncontrada ? indice : 0);

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