import { question } from "readline-sync";

function main() {
    let [entradas, menorSoma, maiorSoma] = getText().split(" ").map(Number);
    let numeros = getText().split(" ").map(Number);
    let pares = 0;

    for (let i = 0; i < entradas; i++) {
        for (let j = i; j < numeros.length - 1; j++) {
            let somatorio = numeros[i] + numeros[j + 1];
            if (somatorio >= menorSoma && somatorio <= maiorSoma) {
                pares++;
                print(somatorio)
            }
        }
    }
    print(pares);
}

function getText() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();