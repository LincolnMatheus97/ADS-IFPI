import { question } from 'readline-sync'

function main() {
    let frase = get_Text();

    while (frase.length !== 0) {
        let infixa = frase.split(``);

        if (!ehLexical(infixa)) {
            print(`Lexical Error!`);
        } else if (!ehSintatica(infixa)) {
            print(`Syntax Error!`);
        } else {
            let resultado = formaPosfixa(infixa);
            print(resultado);
        }

        frase = get_Text();
    }
}

function ehLexical(infixa) {
    for (let i = 0; i < infixa.length; i++) {
        if (!ehOperando(infixa[i]) && !ehOperador(infixa[i]) && infixa[i] !== `(` && infixa[i] !== `)`) {
            return false; // Se houver um caractere inválido, erro léxico
        }
    }
    return true;
}

function ehSintatica(infixa) {
    let aux = [];
    let ultimo = ``;

    for (let i = 0; i < infixa.length; i++) {
        let atual = infixa[i];

        if (atual === `(`) {
            aux.push(atual);
        } else if (atual === `)`) {
            if (aux.length === 0) {
                return false; // Parêntese fechado sem abrir
            }
            aux.pop();
        } else if (ehOperador(atual)) {
            if (i === 0 || i === infixa.length - 1) {
                return false; // Operador no início ou final
            }
            if (ehOperador(ultimo)) {
                return false; // Dois operadores seguidos
            }
        } else if (ehOperando(atual)) {
            if (ehOperando(ultimo)) {
                return false; // Dois operandos seguidos sem operador
            }
        }

        ultimo = atual;
    }

    return aux.length === 0; // Verifica se os parênteses estão balanceados
}

function formaPosfixa(infixa) {
    let posfixa = ``;
    let pilha = [];

    for (let i = 0; i < infixa.length; i++) {
        if (ehOperando(infixa[i])) {
            posfixa += infixa[i];
        } else if (infixa[i] === `(`) {
            pilha.push(infixa[i]);
        } else if (ehOperador(infixa[i])) {
            while (pilha.length !== 0 && prioridade(pilha[pilha.length - 1]) >= prioridade(infixa[i])) {
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

    while (pilha.length !== 0) {
        posfixa += pilha.pop();
    }

    return posfixa;
}

function ehOperando(string) {
    return /[a-zA-Z0-9]/.test(string);
}

function ehOperador(string) {
    return `+-/*^><=#.|`.includes(string);
}

function prioridade(string) {
    switch (string) {
        case `(`:
        case `)`: return 0;
        case `|`: return 1;
        case `.`: return 2;
        case `>`:
        case `<`:
        case `=`:
        case `#`: return 3;
        case `+`:
        case `-`: return 4;
        case `*`:
        case `/`: return 5;
        case `^`: return 6;
    }
    return -1;
}

function get_Text() {
    return question();
}

function print(texto) {
    console.log(texto);
}

main();