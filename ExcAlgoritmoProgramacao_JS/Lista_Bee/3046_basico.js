import { question } from "readline-sync";

function main() {
    let numeroNatural = get_Number();
    let duploNatural = ((numeroNatural + 1) * (numeroNatural + 2)) / 2;
    print(duploNatural);
    
}

function get_Number() {
    return Number(question());
}

function print(texto) {
    return console.log(texto);
}

main();