import { question } from "readline-sync";

function main() {
    let a = get_Text();

    while (a !== ``) {
        let x = question().split(` `).map(Number);
        let dif = calcularDiferenca(x);
        print(dif);
        a = get_Text();
    }
}

function get_Text() {
    return question();
}

function calcularDiferenca(lista) {
    let soma = lista.reduce(adicao, 0);
    let metadeSoma = soma / 2, difMinima = Infinity, somaTotal = 0;

    for (let i = 0; i < lista.length - 1; i++) {
        somaTotal += lista[i];
        let difAtual = Math.abs(somaTotal - metadeSoma);
        if (difAtual < difMinima) {
            difMinima = difAtual;
        }
    }

    return difMinima * 2;
}

function adicao(x, y) {
    return x + y;
}

function print(texto) {
    return console.log(texto);
}

main();