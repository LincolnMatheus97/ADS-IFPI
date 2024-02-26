/*
Leia 1 (um) número entre 0 e 100, verifique e escreva se o número é ou não primo.
*/

import { get_number, print } from "../utils/io_utils.js";

function main() {
    //Entrada
    const numb = get_number(`
            ----->  Digite 1(um) numero entre 0 e 100: `);
    //Processamento e Saída
    if (num_esta_entre_0e100(numb)) {
        if (eh_primo(numb)) {
            print(`
            ----->  Dado o número entre 0 e 100, sendo ${numb}. O número é primo.`);
        } else {
            print(`
            ----->  Dado o número entre 0 e 100, sendo ${numb}. O número não é primo.`);
        }
    } else {
        print(`
            ----->  Entrada inválida, dígite um número entre 0 e 100.`);
    }
}

function num_esta_entre_0e100(numb) {
    return (numb >= 0 && numb <= 100);
}

function eh_primo(numb) {
    if (numb <= 1) {
        return false;
    } else if (numb === 2) {
        return true;
    } else if (numb % 2 === 0) {
        return false;
    } else if (numb === 3 || numb === 5 || numb === 7) {
        return true;
    } else if (numb % 3 === 0 || numb % 5 === 0 || numb % 7 === 0) {
        return false;
    } else {
        return true;
    }
}

main();