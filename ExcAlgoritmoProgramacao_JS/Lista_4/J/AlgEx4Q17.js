/*
Em um concurso de beleza, cada candidata tem um cartão contendo nome, altura e peso.  Escreva um 
algoritmo que leia um conjunto de cartões e escreva o nome e a altura da candidata mais alta e da mais 
baixa; o nome e o peso da candidata mais magra e da mais gorda. (Flag: nome = 'FIM'). 
*/

import { get_number, get_text, print } from "../../utils/io_utils.js";

function main() {
    let nome = ``;
    let mais_alta = 0;
    let nome_alta;
    let mais_baixa = Infinity;
    let nome_baixa;
    let mais_magra = Infinity;
    let nome_magra;
    let mais_gorda = 0;
    let nome_gorda;

    while (nome !== `FIM`) {
        nome = get_text(`Digite o seu nome candidata:  `).toUpperCase();
        if(nome === `FIM`) {
            break;
        }
        
        let altura = get_number(`Digite sua altura em metros(m): `);
        let peso = get_number(`Digite seu peso em Kilogramas(Kg): `);

        if (Eh_MaisAlta(mais_alta, altura)) {
            mais_alta = altura;
            nome_alta = nome;
        } else {
            mais_baixa = altura;
            nome_baixa = nome;
        }

        if (Eh_MaisGorda(mais_gorda, peso)) {
            mais_gorda = peso;
            nome_gorda = nome;
        } else {
            mais_magra = peso;
            nome_magra = nome;
        }
    }
    print(`
    -----------------------------------------------------------------------------------------------
                >>>>>>>>>>>>>           CONCURSO DE BELEZA          >>>>>>>>>>>>>
    
    ---> Nome e altura candidata mais alta:         NOME: ${nome_alta} e ALTURA: ${mais_alta} m
    ---> Nome e altura candidata mais baixa:        NOME: ${nome_baixa} e ALTURA: ${mais_baixa} m
    ---> Nome e peso candidata mais gorda:          NOME: ${nome_gorda} e ALTURA: ${mais_gorda} kg
    ---> Nome e peso candidata mais magra:          NOME: ${nome_magra} e ALTURA: ${mais_magra} kg
    
    -----------------------------------------------------------------------------------------------`);
}

function Eh_MaisAlta(num1, num2) {
    return num2 > num1;
}

function Eh_MaisGorda(num1, num2) {
    return num2 > num1;
}

main();