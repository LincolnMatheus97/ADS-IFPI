import { question } from "readline-sync";

function main() {
    const N = get_Number();
    const ALFABETO = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const NUMEROS = [`0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`];

    for (let i = 0; i < N; i++) {
        let placa = get_Text();

        if (placa.length === 8) {
            if (placa[3] === '-' &&
                ALFABETO.includes(placa[0]) &&
                ALFABETO.includes(placa[1]) &&
                ALFABETO.includes(placa[2]) &&
                NUMEROS.includes(placa[4]) &&
                NUMEROS.includes(placa[5]) &&
                NUMEROS.includes(placa[6]) &&
                NUMEROS.includes(placa[7])) {
                let diaSemana = determinarDia(placa[7]);
                print(diaSemana);
            } else {
                print(`FAILURE`);
            }
        } else {
            print(`FAILURE`);
        }
    }
}

function get_Number() {
    return Number(question());
}

function get_Text() {
    return question();
}

function determinarDia(num) {
    let dia = ``;

    if (num === `1` || num === `2`) {
        dia += `MONDAY`;
    } else if (num === `3` || num === `4`) {
        dia += `TUESDAY`;
    } else if (num === `5` || num === `6`) {
        dia += `WEDNESDAY`;
    } else if (num === `7` || num === `8`) {
        dia += `THURSDAY`;
    } else {
        dia += `FRIDAY`;
    }

    return dia;

}

function print(texto) {
    return console.log(texto);
}

main();