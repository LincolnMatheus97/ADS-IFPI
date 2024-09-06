import { get_text, print } from "../utils/io.js";

function main() {
    let [a, b] = get_text(`Digite os numeros que deseja multiplicar, Exemplo-> 10 20: `).split(` `).map(Number);
    produto_Recursivo(a, b, 0);
}

function produto_Recursivo(fator_1, fator_2, soma) {
    if (fator_2 === 0) {
        return;
    }
    soma += fator_1;

    return `${print(soma)}` + `${produto_Recursivo(fator_1, fator_2 - 1, soma)}`;
}

main();