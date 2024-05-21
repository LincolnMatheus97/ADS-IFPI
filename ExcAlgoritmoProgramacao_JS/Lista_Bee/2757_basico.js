import { question } from "readline-sync";

function main() {
    const NUMEROS = [];

    for (let i = 0; i < 3; i++) {
        let numeroString = get_Text();
        numeroString = removerZeros(numeroString);
        NUMEROS.push(numeroString);
    }

    print(`A = ${NUMEROS[0]}, B = ${NUMEROS[1]}, C = ${NUMEROS[2]}`);
    print(`A = ${NUMEROS[0].padStart(10, ' ')}, B = ${NUMEROS[1].padStart(10, ' ')}, C = ${NUMEROS[2].padStart(10, ' ')}`);
    print(`A = ${justificarComZero(NUMEROS[0], 10)}, B = ${justificarComZero(NUMEROS[1], 10)}, C = ${justificarComZero(NUMEROS[2], 10)}`);
    print(`A = ${NUMEROS[0].padEnd(10, ' ')}, B = ${NUMEROS[1].padEnd(10, ' ')}, C = ${NUMEROS[2].padEnd(10, ' ')}`);
}

function get_Text() {
    return question();
}

function print(texto) {
    console.log(texto);
}

function removerZeros(numeroString) {
    if (numeroString[0] === '-') {
        return '-' + numeroString.slice(1).replace(/^0+/, '');
    } else {
        return numeroString.replace(/^0+/, '');
    }
}

function justificarComZero(numeroString, totalLength) {
    if (numeroString[0] === '-') {
        let sinal = numeroString[0];
        let numero = numeroString.slice(1);
        let numeroJustificado = numero.padStart(totalLength - 1, '0');
        return sinal + numeroJustificado;
    } else {
        return numeroString.padStart(totalLength, '0');
    }
}

main();''