import { question } from "readline-sync";

function main() {
    let quantidade_Pares = get_Number();

    while (quantidade_Pares > 0) {
        let inteiros_Ordenados = get_Text().split(` `).map(Number).sort((a, b) => a - b);
        let maior = -Infinity;
        let menor = Infinity;

        for (let i = 0; i < quantidade_Pares; i++) {
            let b = inteiros_Ordenados[i] + inteiros_Ordenados[2 * quantidade_Pares - i - 1];
            if (b < menor) {
                menor = b;

            }
            if (b > maior) {
                maior = b;

            }

        }
        print(`${maior} ${menor}`);
        quantidade_Pares = get_Number();

    }

}

function get_Text() {
    return question();

}

function get_Number() {
    return Number(question());

}

function print(texto) {
    return console.log(texto);

}

main();