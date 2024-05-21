import { question } from "readline-sync";

function main() {
    let n = get_Number();
    let pontos = (n / 24) * (n ** 3 - 6 * n ** 2 + 23 * n - 18) + 1;

    print(pontos);

}

function get_Number() {
    return Number(question());
}

function print(texto) {
    return console.log(texto);
}

main();