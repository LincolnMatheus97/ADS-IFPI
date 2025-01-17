import { question } from "readline-sync";
import readlineSync from "readline-sync";
import fs from 'fs';

export function get_number(texto: string) {
    return Number(question(texto));
}

export function get_positive_number(texto: string) {

    const numero = get_number(texto);

    if (numero <= 0) {
        print (`****** Valor Inválido ******`)
        return get_positive_number(texto);
    }

    return numero
}

export function print(texto: string){
    return console.log(texto);
}

export function get_date(texto: string) {
    const data = new Date(question(texto));
    return data 
}

export function get_text(mensagem: string) {
    return question(mensagem);
}

export function percentual(valor: number, percentil: number) {
    return valor * (percentil / 100);
}

export function round_number(number: number, decimal_places=2){
    return number.toFixed(decimal_places)
}

export function get_random_number(min: number, max: number){
    return Math.floor(Math.random() * (max - min)) + min
}

export function porcentagem(valor: number, total: number) {
    return (valor * 100) / total;
}

export function reverse(string: string) {
    return string.split('').reverse().join('');
}

export function hideInput(texto: string) {
    return readlineSync.question(texto, {
        hideEchoBack: true,
    });
}

export function read_file(nomeArquivo: string) {
    if (fs.existsSync(nomeArquivo)) {
        return fs.readFileSync(nomeArquivo, 'utf8');
    } else {
        console.error(`Erro: Arquivo não encontrado em ${nomeArquivo}`);
        return '';
    }
}

export function write_file(nomeArquivo: string, conteudo: any) {
    fs.writeFileSync(nomeArquivo, conteudo);
}