import { question } from "readline-sync";

function main() {
    let minFaltando = get_Number();
    let [tempo1, tempo2] = get_Text().split(` `).map(Number);

    tempo1 + tempo2 > minFaltando ? print(`Deixa para amanha!`) : print(`Farei hoje!`);

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