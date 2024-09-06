import { get_text, print } from "../utils/io.js";

function main() {
    let [a, b] = get_text(`Digite um intervalo de valores, Exemplo-> 10 20:`).split(` `).map(Number);
    let somatorio = 0;

    if (a < b) {
        for (let i = a; i < b; i++) {
            a++;
            somatorio++;
        }
    } else {
        for (let i = a; i > b; i--) {
            a--;
            somatorio++;
        }
    }
    print(somatorio);
}

main();