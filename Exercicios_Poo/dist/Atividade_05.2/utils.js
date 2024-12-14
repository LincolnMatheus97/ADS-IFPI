"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_number = get_number;
exports.get_positive_number = get_positive_number;
exports.print = print;
exports.get_date = get_date;
exports.get_text = get_text;
exports.percentual = percentual;
exports.round_number = round_number;
exports.get_random_number = get_random_number;
exports.porcentagem = porcentagem;
exports.reverse = reverse;
exports.hideInput = hideInput;
const readline_sync_1 = require("readline-sync");
const readline_sync_2 = __importDefault(require("readline-sync"));
function get_number(texto) {
    return Number((0, readline_sync_1.question)(texto));
}
function get_positive_number(texto) {
    const numero = get_number(texto);
    if (numero <= 0) {
        print(`****** Valor Inválido ******`);
        return get_positive_number(texto);
    }
    return numero;
}
function print(texto) {
    return console.log(texto);
}
function get_date(texto) {
    const data = new Date((0, readline_sync_1.question)(texto));
    return data;
}
function get_text(mensagem) {
    return (0, readline_sync_1.question)(mensagem);
}
function percentual(valor, percentil) {
    return valor * (percentil / 100);
}
function round_number(number, decimal_places = 2) {
    return number.toFixed(decimal_places);
}
function get_random_number(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function porcentagem(valor, total) {
    return (valor * 100) / total;
}
function reverse(string) {
    return string.split('').reverse().join('');
}
function hideInput(texto) {
    return readline_sync_2.default.question(texto, {
        hideEchoBack: true,
    });
}
//# sourceMappingURL=utils.js.map