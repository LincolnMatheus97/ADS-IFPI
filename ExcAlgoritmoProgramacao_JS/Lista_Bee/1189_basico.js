import { question } from "readline-sync";

function main() {
    let matriz = [];
    let ordem = 12;
    let operacao = get_Text().toUpperCase();
    let s = 0;
    let count = 0;

    for (let i = 0; i < ordem; i++) {
        let linha = [];

        for (let j = 0; j < ordem; j++) {
            let valor = get_Number();
            linha.push(valor);

            if ((i > j) && ((i + j) < ordem - 1)) {
                s += valor;
                count++;
            }

        }
        matriz.push(linha);

    }
    let m = s / count;

    if (operacao === `S`) {
        print(`${s.toFixed(1)}`);

    } else if (operacao === `M`) {
        print(`${m.toFixed(1)}`);

    }

}

function get_Number() {
    return Number(question());
}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();