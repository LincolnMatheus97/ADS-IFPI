import { question } from "readline-sync";

function main() {
    const N = get_Number();
    let participanteNota = [];

    for (let i = 0; i < N; i++) {
        let totalpontos = 0;
        let nome = get_Text();
        let notaDificuldade = get_Number();
        let nota = get_Text().split(` `).map(Number);

        let maiorNota = Math.max(...nota);
        let menorNota = Math.min(...nota);

        nota = nota.filter(n => n !== maiorNota && n !== menorNota);

        for (let k = 0; k < nota.length; k++) {
            totalpontos += nota[k];
        }
        participanteNota.push(nome), participanteNota.push(totalpontos *= notaDificuldade);

    }

    for (let n = 0; n < participanteNota.length; n += 2) {
        print(`${participanteNota[n]} ${participanteNota[n + 1].toFixed(2)}`)
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