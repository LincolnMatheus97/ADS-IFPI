import { question } from "readline-sync";

function main() {
    const ABCD = get_number();

    let valores = ABCD.split(` `);
    let A = parseInt(valores[0]);
    let B = parseInt(valores[1]);
    let C = parseInt(valores[2]);
    let D = parseInt(valores[3]);

    if (Valores_Aceitos(A, B, C, D)) {
        print(`Valores aceitos`);
    } else {
        print(`Valores nao aceitos`);
    }
}

function get_number() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

function Valores_Aceitos(num1, num2, num3, num4) {
    return (num2 > num3 && num4 > num1 &&
        (num3 + num4) > (num1 + num2) &&
        (num3 && num4) > 0 && (num1 % 2 === 0));
}

main();