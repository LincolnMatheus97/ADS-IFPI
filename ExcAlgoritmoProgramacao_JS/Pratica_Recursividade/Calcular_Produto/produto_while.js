import { get_text, print } from "../utils/io.js";

function main() {
    let [a, b] = get_text(`Digite os numeros que deseja multiplicar, Exemplo-> 10 20: `).split(` `).map(Number);
    let soma = 0, ate = b;

    while (ate > 0) {
        soma += a
        print(soma);
        ate--;     
    }
}

main();