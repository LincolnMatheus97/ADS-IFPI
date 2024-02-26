/*
Leia os 3 (três) lados de um triângulo e identifique sua hipotenusa e seus catetos.
*/

import { print, get_number } from "../utils/io_utils.js";

function main() {
    //Entrada
    const a = get_number(`Digite o valor de um lado do triangulo: `);
    const b = get_number(`Digite o valor de segundo lado do triangulo: `);
    const c = get_number(`Digite o valor de terceiro lado do triangulo: `);

    //Processamento e Saída
    if (Eh_TrianguloRetangulo(a, b, c)) {
        print("Dados os lados, eles formam um triângulo retângulo.");

        if (LadoA_Eh_Hipotenusa(a, b, c)) {
            print(`
            Dado os lados ${a}, ${b} e ${c}. Podemos dizer que o lado ${a} é a hipotenusa e
            ${b} e ${c} são catetos desse triângulo.`);

        } else if (LadoB_Eh_Hipotenusa(a, b, c)) {
            print(`
            Dado os lados ${a}, ${b} e ${c}. Podemos dizer que o lado ${b} é a hipotenusa e
            ${a} e ${c} são catetos desse triângulo.`);

        } else if (LadoC_Eh_Hipotenusa(a, b, c)) {
            print(`
            Dado os lados ${a}, ${b} e ${c}. Podemos dizer que o lado ${c} é a hipotenusa e
            ${b} e ${a} são catetos desse triângulo.`);

        } else {
            print(`Dado os lados, eles não forma um triângulo retângular.`);
        }
    } else {
        print(`Dado os lados, eles não formam um triângulo.`);
    }
}

function Eh_TrianguloRetangulo(a, b, c) {
    return (a + b > c || a + c > b || b + c > a);
}

function LadoA_Eh_Hipotenusa(a, b, c) {
    return (a ** 2 === (b ** 2 + c ** 2));
}

function LadoB_Eh_Hipotenusa(a, b, c) {
    return (b ** 2 === (a ** 2 + c ** 2));
}

function LadoC_Eh_Hipotenusa(a, b, c) {
    return (c ** 2 === (b ** 2 + a ** 2));
}

main();