import { get_random_number, get_text, print } from "../utils/io.js";

function main() {
    let [a, b] = get_text(`Digite um intervalo de valores, Exemplo-> 10 20:`).split(` `).map(Number);
    let intervalo = Math.abs(a - b), somatorio = 0;

    while (intervalo > 0) {
        somatorio++;
        intervalo--;
    }

    print(somatorio)
}

main();