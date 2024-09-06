import { get_text, print } from "../utils/io.js";

function main() {
    let [a, b] = get_text(`Digite um intervalo de valores, Exemplo-> 10 20:`).split(` `).map(Number);
    let intervalo = Math.abs(a - b), somatorio = 1;
    let resultado = somatorio_Recursivo(intervalo, somatorio);
    print(resultado);

}

function somatorio_Recursivo(intervalo, sum) {
    if (intervalo === 0) {
        return 0;
    }

    return  sum + somatorio_Recursivo(intervalo - 1, sum);
}

main();