import { question } from "readline-sync";

function main() {
    let numero = get_Number();
    let mensagem = ``;

    if (numero >= 1000) {
        mensagem += `M`.repeat(Math.floor(numero / 1000));
        numero %= 1000;
    }

    if (numero >= 900) {
        mensagem += `CM`;
        numero -= 900;
    }

    if (numero >= 500) {
        mensagem += `D`;
        numero -= 500;
    }

    if (numero >= 400) {
        mensagem += `CD`;
        numero -= 400;
    }

    if (numero >= 100) {
        mensagem += `C`.repeat(Math.floor(numero / 100));
        numero %= 100;
    }

    if (numero >= 90) {
        mensagem += `XC`;
        numero -= 90;
    }

    if (numero >= 50) {
        mensagem += `L`;
        numero -= 50;
    }

    if (numero >= 40) {
        mensagem += `XL`;
        numero -= 40;
    }

    if (numero >= 10) {
        mensagem += `X`.repeat(Math.floor(numero / 10));
        numero %= 10;
    }

    if (numero >= 9) {
        mensagem += `IX`;
        numero -= 9;
    }

    if (numero >= 5) {
        mensagem += `V`;
        numero -= 5;
    }

    if (numero >= 4) {
        mensagem += `IV`;
        numero -= 4;
    }

    if (numero >= 1) {
        mensagem += `I`.repeat(numero);
    }

    print(mensagem);
}

function get_Number() {
    return Number(question());
}

function print(texto) {
    return console.log(texto);
}

main();