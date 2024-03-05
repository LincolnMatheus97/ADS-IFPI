import { question } from "readline-sync";

function main() {
    const A = get_number();
    const B = get_number();
    const C = get_number();

    const pesoA = 2;
    const pesoB = 3;
    const pesoC = 5;

    let media = Media_Ponderada(A, pesoA, B, pesoB, C, pesoC);

    print(`MEDIA = ${media.toFixed(1)}`);
}

function get_number() {
    return Number(question(`Numero: `));
}

function print(texto) {
    return console.log(texto);
}

function Media_Ponderada(A, pesoA, B, pesoB, C, pesoC) {
    let media_ponderada;

    media_ponderada = ((A * pesoA) + (B * pesoB) + (C * pesoC)) / (pesoA + pesoB + pesoC);

    return media_ponderada;
}

main();