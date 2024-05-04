import { question } from "readline-sync";

function main() {
    const FRASE = (`LIFE IS NOT A PROBLEM TO BE SOLVED`).split(``);
    const N = get_Number();
    let mensagem = ``;

    for(let i = 0; i < N; i++) {
        mensagem += `${FRASE[i]}`;

    }
    print(mensagem);
}

function get_Number() {
    return Number(question());
}

function print(texto) {
    return console.log(texto);
}

main();