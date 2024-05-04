import { question } from "readline-sync";

function main() {
    const Q = get_Number();

    for (let i = 0; i < Q; i++) {
        let participantesEscolhas = get_Text().split(` `);
        let numeros = get_Text().split(` `).map(Number);
        let soma = numeros[0] + numeros[1];

        if (soma % 2 === 0) {
            if (participantesEscolhas[1] === `PAR`) {
                print(participantesEscolhas[0]);
            } else {
                print(participantesEscolhas[2]);
            }
        } else {
            if (participantesEscolhas[1] === `IMPAR`) {
                print(participantesEscolhas[0]);
            } else {
                print(participantesEscolhas[2]);
            }
        }
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