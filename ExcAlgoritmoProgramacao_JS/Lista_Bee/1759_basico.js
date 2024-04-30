import { question } from "readline-sync";

function main() {
    const N = get_Number();
    let mensagem = ``;

    if (N >= 0 && N <= 10 ** 6) {
        for (let i = 0; i < N; i++) {
            if (i + 1 === N) {
                mensagem += `Ho!`;
            } else {
                mensagem += `Ho `;
            }
        }
        print(mensagem);
    }
}

function get_Number() {
    return Number(question());
}

function print(texto) {
    return console.log(texto);
}

main();