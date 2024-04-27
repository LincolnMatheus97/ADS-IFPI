import { question } from "readline-sync";

function main() {
    const N = 20;
    let vetorN = [];

    for (let i = 0; i < N; i++) {
        let valor = get_Number();
        vetorN.push(valor);

    }

    for (let j = 0; j < vetorN.length; j++) {
        print(`N[${j}] = ${(vetorN[(vetorN.length - 1) - j])}`);

    }

}

function get_Number() {
    return Number(question());
}

function print(texto) {
    return console.log(texto);
}

main();