import { question } from "readline-sync";

function main() {
    let [F1, F2] = get_Text().split(` `).map(Number);
    let flutuacao = (100 + F1) * (F2 / 100 + 1) - 100;
    print(flutuacao.toFixed(6));

}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();