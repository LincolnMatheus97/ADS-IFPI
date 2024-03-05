/*
Um fazendeiro possui fichas de controle sobre sua boiada. Cada ficha contém numero de identificação, 
nome e peso (em kg) do boi. Escreva um algoritmo que leia os dados de N fichas e ao final, escreva o 
numero de identificação e o peso do boi mais magro e do boi mais gordo.
*/

import { get_number, print } from "../utils/io_utils.js";

function main() {
    //Entrada
    const N = get_number(`Digite quantas fichas voce deseja: `);

    //Processamento e Saída
    let i = 1;
    let maior_peso = 0;
    let menor_peso = Infinity;
    let num_indetf_maior;
    let num_indetf_menor;

    for (i; Ate_N(i, N); i++) {
        const num_indetf = get_number(`Digite o numero de identificacao do boi: `);
        const peso = get_number(`Digite o peso do Boi: `);

        if (Eh_Maior_Peso(maior_peso, peso)) {
            num_indetf_maior = num_indetf;
            maior_peso = peso;
        } else {
            num_indetf_menor = num_indetf;
            menor_peso = peso;
        }

    }
    print(`
    -------------------------------------------------------------------------------------------------------------
        
        O número de identificação ${num_indetf_maior} é do boi de peso: ${maior_peso} ou seja o boi mais gordo. 
        O número de identificação ${num_indetf_menor} é do boi de peso: ${menor_peso} ou seja o boi mais magro.
    
    -------------------------------------------------------------------------------------------------------------`);
}

function Ate_N(num1, num2) {
    return num1 <= num2;
}

function Eh_Maior_Peso(valor, peso) {
    return peso > valor;
}

main();