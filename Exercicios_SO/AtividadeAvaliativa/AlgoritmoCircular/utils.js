import { question } from "readline-sync";

export function getNumber(numero) {
    return parseInt(question(numero));
}

export function getText(texto) {
    return question(texto);
}

export function print(texto) {
    console.log(texto);
}