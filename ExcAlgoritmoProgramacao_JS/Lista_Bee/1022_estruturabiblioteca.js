import { question } from "readline-sync";

function main() {
    let quantida_Casos = get_Number();
    while(quantida_Casos > 0) {
        let expressao = get_Text();
        let resultado = calcular_Expressao(expressao);
        print(resultado);
        quantida_Casos--;
    }
}

function calcular_Expressao(expressao) {
    let valores = expressao.split(" ");
    let n1 = parseInt(valores[0]);
    let d1 = parseInt(valores[2]);
    let n2 = parseInt(valores[4]);
    let d2 = parseInt(valores[6]);
    let operacao = valores[3];

    let n = 0;
    let d = 0;

    switch (operacao) {
        case "+":
            n = n1 * d2 + n2 * d1;
            d = d1 * d2;
            break;
        case "-":
            n = n1 * d2 - n2 * d1;
            d = d1 * d2;
            break;
        case "*":
            n = n1 * n2;
            d = d1 * d2;
            break;
        case "/":
            n = n1 * d2;
            d = n2 * d1;
            break;
    }
    return `${n}/${d} = ${simplicar_Fracao(n, d)}`;
}

function simplicar_Fracao(n, d) {
    let divisor = calcular_MDC(Math.abs(n), Math.abs(d));
    n /= divisor;
    d /= divisor;
    if (d < 0) {
        n *= -1;
        d *= -1;
    }
    return `${n}/${d}`;
}

function calcular_MDC(n, d) {
    let resto = 0;
    while (d !== 0) {
        resto = n % d;
        n = d;
        d = resto;
    }
    return n;
}

function print(texto) {
    return console.log(texto);
}

function get_Number() {
    return parseInt(question());
}

function get_Text() {
    return question();
}

main();