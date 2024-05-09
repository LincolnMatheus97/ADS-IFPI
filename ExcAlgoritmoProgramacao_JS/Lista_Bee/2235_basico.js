import { question } from "readline-sync";

function main() {
    const [c1, c2, c3] = get_Text().split(` `).map(Number);
    c1 === c2 + c3 || c2 === c1 + c3 || c3 === c1 + c2 || c1 === c2 || c2 === c3 || c3 === c1 ? print(`S`) : print(`N`);

}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();