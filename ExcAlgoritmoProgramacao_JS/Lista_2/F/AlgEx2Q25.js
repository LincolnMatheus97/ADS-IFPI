/*
Verifique a validade de uma senha fornecida pelo usuário. A senha é 1234. O algoritmo deve escrever
uma mensagem de permissão de acesso ou não.
*/

import { print, get_number } from "../../utils/io_utils.js";

function main() {
    //Entrada
    const a = get_number(`Digite um primeiro numero: `);
    const b = get_number(`Digite um segundo  numero: `);
    const c = get_number(`Digite um terceiro numero: `);
    const d = get_number(`Digite um quarto numero: `);

    //Processamento e Saída
    if (SenhaCorreta(a, b, c, d)) {
        print(`Senha válida. Acesso permitido!`);
    } else {
        print(`Senha inválida. Acesso negado!`);
    }
}

function SenhaCorreta(a, b, c, d) {
    return (a === 1 && b === 2 && c === 3 && d === 4);
}

main();