import { question } from "readline-sync";

function main() {
    let n = getNumber();

    while (n != 0) {
        let resultado = encontrarSobrevivente(n);
        print(resultado);
        n = getNumber();
    }
}

function encontrarSobrevivente(n) {
    let sobriviventes = [];
    for (let i = 1; i <= n; i++) {
        sobriviventes.push(i);
    }

    let posicaoNoArry = 0;
    let primos = gerarPrimeirosPrimos();

    for (let i = 0; i < n - 1; i++) {
        let m = primos[i];
        let sobriviventesRestantes = sobriviventes.length;

        let posicaoParaRemover = (posicaoNoArry + m - 1) % sobriviventesRestantes;

        sobriviventes.splice(posicaoParaRemover, 1);

        posicaoNoArry = posicaoParaRemover;
    }

    return sobriviventes[0];
}

function gerarPrimeirosPrimos() {
    let quantidade = 3501;
    let primos = [];
    let num = 2;

    while (primos.length < quantidade) {
        if (ehPrimo(num)) {
            primos.push(num);
        }
        num++;
    }

    return primos;
}

function ehPrimo(numero) {
    if (numero <= 1) {
        return false;
    }

    for (let i = 2; i * i <= numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }

    return true;
}

function getNumber() {
    return parseInt(question());
}

function print(texto) {
    return console.log(texto);
}

main();