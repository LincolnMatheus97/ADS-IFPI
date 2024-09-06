import { get_text, print } from "../utils/io.js";

function main() {
    let [a, b] = get_text(`Digite a faixa de numeros que voce deseja, Exemplo: 10 20: `).split(` `).map(Number);
    sequencia_Recursiva(a, b + 1);
}

function sequencia_Recursiva(inicio, final) {
    if (inicio - final === 0) {
        return 0;
    }
    
    if (final < 0) {
        return `${print(inicio)}` + `${sequencia_Recursiva(inicio - 1, final)}`;
    } else {
        return `${print(inicio)}` + `${sequencia_Recursiva(inicio + 1, final)}`;
    }
}

main();