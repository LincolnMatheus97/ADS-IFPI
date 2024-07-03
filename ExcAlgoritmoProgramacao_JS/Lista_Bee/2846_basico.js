import { question } from "readline-sync";

function main() {
    let naoFibonacci = gerarSequenciaFibonot(100100);
    let indiceDaSequenciaFibonot = get_Number();
    if (indiceDaSequenciaFibonot > 0 && indiceDaSequenciaFibonot <= naoFibonacci.length) {
        let elementoDaSequenciaFibonot = naoFibonacci[indiceDaSequenciaFibonot - 1];
        print(elementoDaSequenciaFibonot);

    }

}

function gerarSequenciaFibonot(valor) {
    let fibonacci = gerarSequenciaFibonacci(valor);
    let naoFibonacci = [];

    for(let i = 0; i <= valor; i++) {
        if(!fibonacci.includes(i)) {
            naoFibonacci.push(i);

        }

    }
    return naoFibonacci;

}

function gerarSequenciaFibonacci(valor) {
    let fibonacci = [0, 1];

    while (fibonacci[fibonacci.length - 1] <= valor) {
        let proximoNumero = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
        fibonacci.push(proximoNumero);

    }
    return fibonacci;

}

function get_Number() {
    return Number(question());
    
}

function print(texto) {
    return console.log(texto);

}

main();