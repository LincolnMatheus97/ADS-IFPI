import { get_text, print } from "../utils/io.js";

function main() {
    let [a, b] = get_text(`Digite os numeros que deseja multiplicar, Exemplo-> 10 20: `).split(` `).map(Number);
    let soma = 0;

    for (let i = b; i > 0; i--) {
        soma += a;
        print(soma);
    }
}

main();