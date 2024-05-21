import { question } from "readline-sync";

function main() {
    const n = get_Number();

    for (let i = 0; i < n; i++) {
        let m = get_Number();
        let sequencia = get_Text().split(` `).map(Number);
        let sequenciaImpares = sequencia.filter(num => num % 2 !== 0).sort((a, b) => b - a);

        let sequenciaReorganizada = [];
        let indexMaior = 0;
        let indexMenor = sequenciaImpares.length - 1;

        for (let j = 0; j < sequenciaImpares.length; j++) {
            if (j % 2 !== 0) {
                sequenciaReorganizada.push(sequenciaImpares[indexMenor]);
                indexMenor--;
            } else {
                sequenciaReorganizada.push(sequenciaImpares[indexMaior]);
                indexMaior++;
            }
        }

        print(sequenciaReorganizada.join(` `));
        sequenciaReorganizada = [];
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