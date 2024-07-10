import { question } from "readline-sync";

function main() {
    const inteiroA = get_Number();
    const inteiroB = get_Number();
    const restoDivisaoAB = Math.floor(inteiroA % inteiroB);
    print(restoDivisaoAB);

}

function get_Number() {
    return Number(question());
}

function print(texto) {
    return console.log(texto);
}

main();