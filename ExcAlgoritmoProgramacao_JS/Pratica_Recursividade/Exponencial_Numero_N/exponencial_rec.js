import { get_text, print } from "../utils/io.js";

function main() {
    let [a, b] = get_text(`Digite os numeros que deseja multiplicar, Exemplo-> 10 20: `).split(` `).map(Number);
    exponencial_Recursivo(a, b, 1);

}

function exponencial_Recursivo(fator_1, fator_2, fatorial) {
    if (fator_2 === 0) {
        return;
    }

    fatorial *= fator_1;

    return `${print(fatorial)}` + `${exponencial_Recursivo(fator_1, fator_2 - 1, fatorial)}`;
}

main();