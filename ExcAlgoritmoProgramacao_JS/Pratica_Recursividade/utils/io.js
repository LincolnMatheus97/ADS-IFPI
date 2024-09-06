import { question } from "readline-sync";

export function get_number(texto) {
    return Number(question(texto));
}

export function get_text(mensagem) {
    return question(mensagem);
}

export function print(texto){
    return console.log(texto);
}

export function get_random_number(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}