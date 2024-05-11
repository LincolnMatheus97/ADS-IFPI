import { question } from "readline-sync";

function main() {
    const renas = [`Dasher`, `Dancer`, `Prancer`, `Vixen`, `Comet`, `Cupid`, `Donner`, `Blitzen`, `Rudolph`];
    let bolinhas = get_Text().split(` `).map(Number);
    let soma = 0;

    for (let i = 0; i < bolinhas.length; i++) {
        soma += bolinhas[i];
    }

    let renaEscolhida = ``;

    for (let i = 0; i < soma; i++) {
        let indice = i % renas.length; //Garanto que seja recalculado a cada iteração e sempre volte para o primeiro elemento.
        renaEscolhida = `${renas[indice]}`;
    }

    print(renaEscolhida);
}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();