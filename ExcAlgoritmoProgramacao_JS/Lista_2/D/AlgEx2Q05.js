/*
Leia 3 (três) números e escreva-os em ordem crescente.
*/

import { print, get_number } from "../../utils/io_utils.js";

function main() {
    //Entrada
    const numb1 = get_number("Digite um primeiro numero: ");
    const numb2 = get_number("Digite um segundo numero: ");
    const numb3 = get_number("Digite um terceiro numero: ");

    //Processamento
    if (num1_eh_menor(numb1, numb2, numb3)) {
        if (numb2 > numb3) {
            print(`
            ---> Os números em ordem crecente são: ${numb1}, ${numb2} e ${numb3}.`);
        } else {
            print(`
            ---> Os números em ordem crecente são: ${numb1}, ${numb3} e ${numb2}.`);
        }
    } else if (num2_eh_menor(numb1, numb2, numb3)) {
        if (numb1 > numb3) {
            print(`
            ---> Os números em ordem crecente são: ${numb2}, ${numb1} e ${numb3}.`);
        } else {
            print(`
            ---> Os números em ordem crecente são: ${numb2}, ${numb3} e ${numb1}.`);
        }
    } else if (num3_eh_menor(numb1, numb2, numb3)) {
        if (numb2 > numb1) {
            print(`
            ---> Os números em ordem crecente são: ${numb3}, ${numb2} e ${numb1}.`);
        } else {
            print(`
            ---> Os números em ordem crecente são: ${numb3}, ${numb1} e ${numb2}.`);
        }
    }
}

function num1_eh_menor(numb1, numb2, numb3) {
    return numb1 <= numb2 && numb1 <= numb3
}

function num2_eh_menor(numb1, numb2, numb3) {
    return numb2 <= numb1 && numb2 <= numb3
}

function num3_eh_menor(numb1, numb2, numb3) {
    return numb3 <= numb2 && numb3 <= numb1
}

main();