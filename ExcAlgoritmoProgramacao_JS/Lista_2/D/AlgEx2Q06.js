/*
Leia 3 (três) números (cada número corresponde a um ângulo interno do triângulo), verifique e escreva
se os 3 (três) números formam um triângulo (a soma dos ângulos internos é igual a 180º). Se formam,
verifique se formam um triângulo acutângulo (3 ângulos < 90º), retângulo (1 ângulo = 90º) ou
obtusângulo (1 ângulo > 90º). Não existe ângulo com tamanho 0º (zero grau).
*/

import { get_positive_number, print } from "../utils/io_utils.js";

function main () {
	//Entrada
    const ang1 = get_positive_number(`Digite um primeiro numero que representa um angulo do triangulo: `);
    const ang2 = get_positive_number(`Digite um segundo numero que representa um angulo do triangulo: `);
	const ang3 = get_positive_number(`Digite um terceiro numero que representa um angulo do triangulo: `);
	
	//Processamento e Saída
	if (eh_um_triangulo(ang1, ang2, ang3)) {
        const { resultado } = classificação_triangulo(ang1, ang2, ang3);
        print (`
        ---> Dado a soma dos ângulos dígitados, temos um triângulo: ${resultado}`);
    } else {
        print (`
        ---> Dado a soma dos ângulos dígitados, não formam um triângulo.`);
    }	
}

function eh_um_triangulo(ang1, ang2, ang3) {
    return (ang1 + ang2 + ang3 === 180)       
}

function classificação_triangulo(ang1, ang2, ang3) {
    let mensagem;
    if (ang1 < 90 && ang2 < 90 && ang3 < 90) {
        mensagem =(`Acutângulo.`);
    } else if (ang1 === 90 || ang2 === 90 || ang3 === 90) {
        mensagem =(`Retângulo.`);
    } else {
        mensagem =(`Obtusângulo.`);
    }
    return { resultado: mensagem } 
}

main();