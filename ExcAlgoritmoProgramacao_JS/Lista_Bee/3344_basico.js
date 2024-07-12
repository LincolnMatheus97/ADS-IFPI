import { question } from "readline-sync";

function main() {
    let x = get_Number();
    print(`4`);
}

function get_Number() {
    return Number(question());
}

function print(texto) {
    return console.log(texto);
    
}
main();