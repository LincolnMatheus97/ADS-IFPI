import { question } from "readline-sync";

function main() {
    let dias = get_Text().split(` `);
    let dia1 = parseInt(dias[0]);
    let dia2 = parseInt(dias[1]);
    let dia3 = parseInt(dias[2]);

    if ((dia1 >= -100 && dia1 <= 100) && (dia2 >= -100 && dia2 <= 100) && (dia3 >= -100 && dia3 <= 100)) {
        if (dia3 - dia2 > dia2 - dia1 || (dia2 - dia1 === dia3 - dia2 && dia2 - dia1 > 0)) {
            print(`:)`);
        } else {
            print(`:(`)
        }
    }
}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();