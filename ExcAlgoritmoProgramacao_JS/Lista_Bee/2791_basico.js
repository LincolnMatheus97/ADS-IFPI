import { question } from "readline-sync";

function main() {
    const sequencia = get_Text().split(` `).map(Number);
    let indice = 0;

    for (let i = 0; i < sequencia.length; i++) {
        if (sequencia[i] === 1) {
            indice = sequencia.indexOf(sequencia[i]) + 1;
        }
    }
    print(indice);

}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();