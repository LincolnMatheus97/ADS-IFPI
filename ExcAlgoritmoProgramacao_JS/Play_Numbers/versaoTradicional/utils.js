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

export function get_track_number(inicio, final) {
    let numero = get_number(`\r\tDIGITE UM NUMERO: `);
    while (numero < inicio || numero > final) {
        print(`\r\tNUMERO INVALIDO!`);
        numero = get_number(`\r\tDIGITE UM NUMERO: `);
    }

    return numero;
}

export function get_positive_number(numero) {
    return numero >= 0;
}

export function get_negative_number(numero) {
    return numero < 0;
}

export function read_file(nomeArquivo) {
    return fs.readFileSync(nomeArquivo, `utf-8`);
}

export function save_file(nomeArquivo, conteudo) {
    return fs.writeFileSync(nomeArquivo, conteudo);
}