import { question } from "readline-sync";

function main() {
    const entradas = get_number();
    let sequencia = [];

    for (let i = 0; i < entradas; i++) {
        let valor = get_number();
        sequencia.push(valor);
    }

    let sequencia_marcada = [];
    let valor_marcado = 0;

    for (let j = 0; j < sequencia.length; j++) {
        if (sequencia[j] != valor_marcado) {
            sequencia_marcada.push(sequencia[j]);
            valor_marcado = sequencia[j];
        }
    }

    print(`${sequencia_marcada.length}`);
}

function get_number() {
    return parseInt(question());
}

function print(texto) {
    return console.log(texto);
}

main();