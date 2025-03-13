import { question } from 'readline-sync'

function main() {
    let quantidadeCasos = get_Number();

    while (quantidadeCasos !== 0) {
        let infixa = get_Text().split(``);
        let posfixa = formaPosfixa(infixa);
        
        print(posfixa);
        quantidadeCasos--;
    }
}

function formaPosfixa(infixa) {
    let posfixa = ``;
    let pilha = [];

    for (let i = 0; i < infixa.length; i++) {
        if (infixa[i] === `(`) {
            pilha.push(infixa[i]);
        } else if (ehOperando(infixa[i])) {
            posfixa += infixa[i];
        } else if (ehOperador(infixa[i])) {
            while(pilha.length !== 0 && prioridade(pilha[pilha.length - 1]) >= prioridade(infixa[i])) {
                posfixa += pilha.pop();
            }
            pilha.push(infixa[i]);
        } else if (infixa[i] === `)`) {
            while (pilha.length !== 0 && pilha[pilha.length - 1] !== `(`) {
                posfixa += pilha.pop();
            }
            pilha.pop();
        }
    }
    while(pilha.length !== 0) {
        posfixa += pilha.pop();
    }

    return posfixa;
}

function ehOperando(string) {
    return /[a-zA-Z0-9]/.test(string);
}

function ehOperador(string) {
    return `+-/*^`.includes(string);
}

function prioridade(string) {
    switch(string) {
        case `(`:
        case `)`: return 0;
        case '+':
        case '-': return 1; 
        case '*':
        case '/': return 2;
        case "^": return 3;
    }
    return -1;
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