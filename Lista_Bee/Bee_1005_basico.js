import { question } from "readline-sync";

function main() {
    const A = get_number();
    const B = get_number();

    const pesoA = 3.5;
    const pesoB = 7.5;

    let media = Media_Ponderada(A, pesoA, B, pesoB);

    print(`MEDIA = ${media.toFixed(5)}`);
}

function get_number() {
    return Number(question(`Numero: `));
}

function print(texto) {
    return console.log(texto);
}

function Media_Ponderada(A, pesoA, B, pesoB) {
    let media_ponderada;

    media_ponderada = ((A * pesoA) + (B * pesoB)) / (pesoA + pesoB);

    return media_ponderada;
}
main();