/*
Leia 3 (três) números (cada número corresponde a um lado do triângulo), verifique e escreva se os 3
(três) números formam um triângulo (a soma de dois lados não pode ser menor que o terceiro lado). Se
formam, verifique se formam um triângulo equilátero (3 lados iguais), isósceles (2 lados iguais) ou
escaleno (3 lados diferentes). Não existe lado com tamanho 0 (zero).
*/

import { get_positive_number, print } from "../../utils/io_utils.js";

function main() {
    //Entrada
    const ld1 = get_positive_number(`Digite um primeiro numero quer representa o lado do triangulo: `);
    const ld2 = get_positive_number(`Digite um segundo numero quer representa o lado do triangulo: `);
    const ld3 = get_positive_number(`Digite um terceiro numero quer representa o lado do triangulo: `);

    //Processamento e Saída
    if (eh_um_triangulo(ld1, ld2, ld3)) {
        const { resultado } = classificação_triangulo(ld1, ld2, ld3);
        print(`
        ---> Dado os lados dígitados, temos um triângulo: ${resultado}`);
    } else {
        print(`
        ---> Dado os lados dígitados, não formam um triângulo.`);
    }

}
function eh_um_triangulo(ld1, ld2, ld3) {
    return (ld1 + ld2 > ld3 || ld1 + ld3 > ld2 || ld2 + ld3 > ld1);
}

function classificação_triangulo(ld1, ld2, ld3) {
    let mensagem;
    if (ld1 === ld2 === ld3) {
        mensagem = ("Equilátero.");
    } else if (ld1 === ld2 || ld1 === ld3 || ld2 === ld3) {
        mensagem = ("Isósceles.");
    } else {
        mensagem = ("Escaleno.");
    }
    return { resultado: mensagem }
}

main();