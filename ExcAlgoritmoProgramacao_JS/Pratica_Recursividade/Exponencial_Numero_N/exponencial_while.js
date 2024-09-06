import { get_text, print } from "../utils/io.js";

function main() {
    let [a, b] = get_text(`Digite o numero da base e o seu expoente, Exemplo-> 10 20: `).split(` `).map(Number);
    let exponencial = 1, ate = b;

    while (ate > 0) {
        exponencial *= a
        print(exponencial);
        ate--;     
    }
}

main();