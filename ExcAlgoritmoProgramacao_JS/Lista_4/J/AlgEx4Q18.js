/*
Supondo-se que a população de uma  cidade A seja de 200.000 habitantes, com uma taxa anual de 
crescimento na ordem de 3.5%, e que a população de uma cidade B seja de 800.000 habitantes, 
crescendo a uma taxa anual de 1.35%, Escreva um algoritmo que determine quantos anos serão 
necessários, para que a população da cidade A ultrapasse a população da cidade B.
*/

import { percentual, print } from "../../utils/io_utils.js";

function main() {
    const populacao_A = 200_000;
    const populacao_B = 800_000;

    let nova_populacao_A = populacao_A;
    let nova_populacao_B = populacao_B;
    let anos_passados = 0;

    while (nova_populacao_B > nova_populacao_A) {
        nova_populacao_A += percentual(nova_populacao_A, 3.5);
        nova_populacao_B += percentual(nova_populacao_B, 1.35);

        anos_passados++;
    }
    print(`Serão necessários ${anos_passados} anos para que a população A ultrapasse a população B. `);

}

main();