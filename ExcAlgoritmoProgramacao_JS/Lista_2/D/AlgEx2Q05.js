/*
Leia 3 (três) números e escreva-os em ordem crescente.
*/

import { print, get_number } from "../../utils/io_utils.js";

function main() {
    //Entrada
    const numb1 = get_number("Digite um primeiro numero: ");
    const numb2 = get_number("Digite um segundo numero: ");
    const numb3 = get_number("Digite um terceiro numero: ");

    //Processamento e Saída
    let maior;
    let domeio;
    let menor;

    if (num1_eh_menor_de_todos(numb1, numb2, numb3)) {
        if (num2_ehMenor_Q_num3(numb2, numb3)) {
            menor = numb1;
            domeio = numb2;
            maior = numb3;

        } else {
            menor = numb1;
            domeio = numb3;
            maior = numb2;

        }
    } else if (num2_eh_menor_de_todos(numb1, numb2, numb3)) {
        if (num1_ehMenor_Q_num3(numb1, numb3)) {
            menor = numb2;
            domeio = numb1;
            maior = numb3;

        } else {
            menor = numb2;
            domeio = numb3;
            maior = numb1;

        }
    } else if (num3_eh_menor_de_todos(numb1, numb2, numb3)) {
        if (num2_ehMenor_Q_num1(numb2, numb1)) {
            menor = numb3;
            domeio = numb2;
            maior = numb1;

        } else {
            menor = numb3;
            domeio = numb1;
            maior = numb2;

        }
    }
    print(`
            ---> Os números em ordem crecente são: ${menor}, ${domeio} e ${maior}.`);
}

function num1_eh_menor_de_todos(numb1, numb2, numb3) {
    return numb1 <= numb2 && numb1 <= numb3
}

function num2_eh_menor_de_todos(numb1, numb2, numb3) {
    return numb2 <= numb1 && numb2 <= numb3
}

function num3_eh_menor_de_todos(numb1, numb2, numb3) {
    return numb3 <= numb2 && numb3 <= numb1
}

function num2_ehMenor_Q_num3(numb2, numb3) {
    return numb2 < numb3
}

function num1_ehMenor_Q_num3(numb1, numb3) {
    return numb1 < numb3
}

function num2_ehMenor_Q_num1(numb2, numb1) {
    return numb2 < numb1
}

main();