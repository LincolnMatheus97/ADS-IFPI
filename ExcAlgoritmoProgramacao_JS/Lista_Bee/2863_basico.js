import { question } from "readline-sync";

function main() {
    let quantidadeCasos = get_Text();
    let menorTempo = Infinity;

    while (quantidadeCasos != ``) {
        quantidadeCasos = parseInt(quantidadeCasos);

        for (let i = 0; i != quantidadeCasos; i++) {
            let tempo = get_Number();
            if (tempo < menorTempo) {
                menorTempo = tempo;
            }

        }

        print(menorTempo);
        menorTempo = Infinity;
        quantidadeCasos = get_Text();

    }
}

function get_Text() {
    return question();
}

function get_Number() {
    return Number(question());
}

function print(texto) {
    return console.log(texto);
}

main();