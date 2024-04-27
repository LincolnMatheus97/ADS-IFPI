import { question } from "readline-sync";

function main() {
    const N = get_Number();
    let x = get_Text().split(` `);
    let vetorX = [];
    let menor = Infinity;
    let posicao = 0;

    if (N > 1 && N < 1000) {
        for (let i = 0; i < N; i++) {
            let numero = parseInt(x[i]);
            vetorX.push(numero);

            if (numero < menor) {
                menor = numero;
                posicao = i;

            }
        }

        print(`Menor valor: ${menor}`);
        print(`Posicao: ${posicao}`);

    }

}

function get_Number() {
    return Number(question());
}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();