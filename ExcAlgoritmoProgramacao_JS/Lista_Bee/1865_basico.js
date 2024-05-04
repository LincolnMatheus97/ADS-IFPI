import { question } from "readline-sync";

function main() {
    let C = get_Number();
    let menorForca = Infinity;
    
    for (let i = 0; i < C; i++) {
        let amigo = get_Text().split(` `);

        if (amigo[0] === `Thor`) {
            print(`Y`);
        } else {
            print(`N`);
        }
    }
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