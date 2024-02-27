/*
Leia os coeficientes (A, B e C) de uma equações de 2° grau e escreva suas raízes. Vale lembrar que o 
coeficiente A deve ser diferente de 0 (zero).
*/

import { print, get_number } from "../../utils/io_utils.js";

function main() {
    //Entrada
    const A = get_number(`Digite um primeiro valor: `);
    const B = get_number(`Digite um segundo valor: `);
    const C = get_number(`Digite um terceiro valor: `);

    //Processamento
    if (A_Eh_Diferente_Zero(A)) {
        const delta = B ** 2 - 4 * A * C;
        if (Delta_Eh_Positivo(delta)) {
            const raiz1 = (-B + Math.sqrt(delta)) / (2 * A);
            const raiz2 = (-B - Math.sqrt(delta)) / (2 * A);

            print(`
            -------------------------------------------------------------------------------
        
                Dado dos valores dos coeficientes ${A}, ${B} e ${C}.
                Temos que as raízes dessa equação do 2° são: 
                ${raiz1.toFixed(2)} e ${raiz2.toFixed(2)}.
                
            -------------------------------------------------------------------------------`);
        } else {
            print("A equação não possui raizes reais.")
        }
    } else {
        print("Digite um número diferente de 0(Zero) para o coeficiente A.");
    }
}

function A_Eh_Diferente_Zero(A) {
    return A !== 0;
}

function Delta_Eh_Positivo(delta) {
    return delta > 0;
}

main();