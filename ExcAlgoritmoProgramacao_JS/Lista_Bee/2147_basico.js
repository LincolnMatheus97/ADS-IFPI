import { question } from "readline-sync";

function main() {
    const C = get_Number();

    for (let i = 0; i < C; i++) {
        let palavra = get_Text();
        let tempo = 0.00;

        for (let j = 0; j < palavra.length; j++) {
            tempo += 0.01;
        }
        print(tempo.toFixed(2));
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