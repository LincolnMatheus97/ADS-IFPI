import { question } from "readline-sync";

function main() {
    const T = get_Number();

    for (let i = 0; i < T; i++) {
        let raios = get_Text().split(` `);
        let menorRaio = parseInt(raios[0]) + parseInt(raios[1]);
        print(`${menorRaio}`);

    }
}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();