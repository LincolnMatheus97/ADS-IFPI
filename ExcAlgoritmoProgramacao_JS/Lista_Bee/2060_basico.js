import { question } from "readline-sync";

function main() {
    let N = get_Number();
    let entradas = get_Text().split(` `).map(Number);
    let multiplo2 = 0;
    let multiplo3 = 0;
    let multiplo4 = 0;
    let multiplo5 = 0;

    for (let i = 0; i < entradas.length; i++) {
        if (entradas[i] % 2 === 0) {
            multiplo2++;
        }
        if (entradas[i] % 3 === 0) {
            multiplo3++;
        }
        if (entradas[i] % 4 === 0) {
            multiplo4++;
        }
        if (entradas[i] % 5 === 0) {
            multiplo5++;
        }
        
    }
    print(`${multiplo2} Multiplo(s) de 2`);
    print(`${multiplo3} Multiplo(s) de 3`);
    print(`${multiplo4} Multiplo(s) de 4`);
    print(`${multiplo5} Multiplo(s) de 5`);
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