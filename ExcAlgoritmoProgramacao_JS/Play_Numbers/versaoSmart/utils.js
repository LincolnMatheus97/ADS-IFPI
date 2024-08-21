import { question } from "readline-sync";
import fs from 'fs';

export function get_number(texto) {
    return Number(question(texto));
}

export function get_text(mensagem) {
    return question(mensagem);
}

export function print(texto){
    return console.log(texto);
}

export function get_random_number(inicio, final){
    return Math.floor(Math.random() * ((final+1) - inicio)) + inicio;
}

export function read_file(nomeArquivo) {
    return fs.readFileSync(nomeArquivo, `utf-8`);
}

export function get_positive_number(numero) {
    return numero >= 0;
}

export function get_negative_number(numero) {
    return numero < 0;
}