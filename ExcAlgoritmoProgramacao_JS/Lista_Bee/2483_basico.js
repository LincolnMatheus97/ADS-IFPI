import { question } from "readline-sync";

function main() {
    const N = get_Number();
    let letraRepetida = `a`.repeat(N);
    print(`Feliz nat${letraRepetida}l!\n`);
    
}

function get_Number() {
    return Number(question());
}

function print(texto) {
    return console.log(texto);
}

main();