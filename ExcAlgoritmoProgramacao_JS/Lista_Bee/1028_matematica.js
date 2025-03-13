import { question } from 'readline-sync'

function main() {
    let quantidadeCasos = get_Number();

    while (quantidadeCasos !== 0) {
        let [cartas1, cartas2] = get_Text().split(` `).map(Number);
        let maximoDivisor = mdc(cartas1, cartas2);
        print(maximoDivisor);
        quantidadeCasos--;
    }
}

function mdc(num1, num2) {
    while (num2 !== 0) {
        let temporario = num2;
        num2 = num1 % num2;
        num1 = temporario;
    }
    return num1;
}

function get_Number() {
    return parseInt(question());
}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();