import { question } from "readline-sync";

function main() {
    let num = get_Number();
    num = num.toExponential(4);
    num = num.split(`e`);
    let sinal = num[0];

    if(num[1].length < 3 && Number(num[1]) >= 0) {
        num[1] = `+0` + num[1][1];
    }

    if(num[1].length < 3 && Number(num[1]) < 0) {
        num[1] = `-0` + num[1][1];
    }

    let stringNum = ``;

    if(Number(num[0]) >= 0) {
        stringNum = `+`;
    }

    if(Number(num[0]) === 0 && sinal === `-`) stringNum = sinal;

    stringNum += num[0] + `E` + num[1];

    print(stringNum);
}

function get_Number() {
    return Number(question());
}

function print(texto) {
    return console.log(texto);
}

main();