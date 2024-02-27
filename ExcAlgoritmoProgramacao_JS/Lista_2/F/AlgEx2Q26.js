/*
Leia os 3 (três) lados de um triângulo e identifique sua hipotenusa e seus catetos.
*/

import { print, get_number } from "../../utils/io_utils.js";

function main() {
    //Entrada
    const a = get_number(`Digite o valor de um lado do triangulo: `);
    const b = get_number(`Digite o valor de segundo lado do triangulo: `);
    const c = get_number(`Digite o valor de terceiro lado do triangulo: `);

    //Processamento e Saída
    let hipotenusa;
    let cateto_1;
    let cateto_2;

    if (Eh_TrianguloRetangulo(a, b, c)) {
        print(`
        ---->   Dados os lados, eles formam um triângulo retângulo.`);

        if (LadoA_Eh_Hipotenusa(a, b, c) || LadoB_Eh_Hipotenusa(a, b, c) || LadoC_Eh_Hipotenusa(a, b, c)) {
            if (LadoA_Eh_Hipotenusa(a, b, c)) {
                hipotenusa = a;
                cateto_1 = b;
                cateto_2 = c;

            } else if (LadoB_Eh_Hipotenusa(a, b, c)) {
                hipotenusa = b;
                cateto_1 = a;
                cateto_2 = c;

            } else {
                hipotenusa = c;
                cateto_1 = a;
                cateto_2 = b;

            }
            print(`
            ----------------------------------------------------------------------------------------------------    
                Dado os lados ${a}, ${b} e ${c}. Podemos dizer que o lado ${hipotenusa} é a hipotenusa e
                ${cateto_1} e ${cateto_2} são catetos desse triângulo.
            ----------------------------------------------------------------------------------------------------`);

        } else {
            print(`
            --> Dado os lados, eles não formam um triângulo.`);
        }
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