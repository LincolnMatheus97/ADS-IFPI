import { get_number, print } from "../utils/io.js";

function main() {
    let numero_N = get_number(`Qual o comprimento que voce quer: `);
    let i1 = 0, i2 = 1;
    let sequencia_Fibona = `0 1`
    sequencia_Fibona += sequencia_Recursiva(numero_N - 3, i1, i2);
    
    if (numero_N === 0 || numero_N === 1) {
        print(`0`);
    } else {
        print(`${sequencia_Fibona}`)
    }
}

function sequencia_Recursiva(n, inicial, proximo) {
    if (n < 0) {
        return;
    }
    let soma = inicial + proximo;

    return ` ${soma}` + `${sequencia_Recursiva(n - 1, inicial = proximo, proximo = soma)}`;
}

main();