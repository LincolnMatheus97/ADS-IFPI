import { question } from "readline-sync";

function main() {
    const LOCAL = get_Number();
    LOCAL <= 800 ? print(`1`) : LOCAL <= 1400 ? print(`2`) : print(`3`);

}

function get_Number() {
    return Number(question());
}

function print(texto) {
    return console.log(texto);
}

main();