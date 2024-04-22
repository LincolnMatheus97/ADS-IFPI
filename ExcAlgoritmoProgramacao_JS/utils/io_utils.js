import { question } from "readline-sync";
import readlineSync from "readline-sync";

export function get_number(texto) {
    return Number(question(texto));
}

export function get_positive_number(texto) {

    const numero = get_number(texto);

    if (numero <= 0) {
        print (`****** Valor Inválido ******`)
        return get_positive_number(texto);
    }

    return numero
}

export function print(texto){
    return console.log(texto);
}

export function get_date(texto) {
    const data = new Date(question(texto));
    return data 
}

export function get_text(mensagem) {
    return question(mensagem);
}

export function percentual(valor, percentil) {
    return valor * (percentil / 100);
}

export function round_number(number, decimal_places=2){
    return number.toFixed(decimal_places)
}

export function get_random_number(min, max){
    return Math.floor(Math.random() * (max - min)) + min
}

export function porcentagem(valor, total) {
    return (valor * 100) / total;
}

export function reverse(string) {
    return string.split('').reverse().join('');
}

export function hideInput(texto) {
    return readlineSync.question(texto, {
        hideEchoBack: true,
    });
}