import { question } from "readline-sync";

function main() {
    const N = get_Number();

    for (let i = 0; i < N; i++) {
        let t = get_Number();
        let formulasPerigosas = [];
        for (let j = 0; j < t; j++) {
            formulasPerigosas.push(get_Text());
        }

        let u = get_Number();
        for (let i = 0; i < u; i++) {
            let compostos = get_Text();

            if (ehPerigoso(compostos, formulasPerigosas)) {
                print(`Abortar`);
            } else {
                print(`Prossiga`);
            }
        }

        if (i !== N - 1) {
            print(``);
        }
    }
}

function get_Number() {
    return Number(question());
}

function get_Text() {
    return question();
}

function ehPerigoso(composto, formulas) {
    const ALFABETO = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;

    for (let element of formulas) {
        if (composto.includes(element)) {
            let aux = composto.split(element);

            for (let i = 1; i < aux.length; i++) {
                if (ALFABETO.includes(aux[i].charAt(0))) {
                    return true;
                }
            }
        }
    }

    return false;
}

function print(texto) {
    return console.log(texto);
}

main();
