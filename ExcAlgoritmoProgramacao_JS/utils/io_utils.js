import { question } from "readline-sync";

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