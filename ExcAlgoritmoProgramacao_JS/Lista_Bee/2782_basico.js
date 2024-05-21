import { question } from "readline-sync";

function main() {
    let n = get_Number();
    let sequencia = get_Text().split(` `).map(Number);
    let escadinha = 0, diferenca;

    for (let i = 1; i < n; i++) {
        if (sequencia[i] - sequencia[i - 1] !== diferenca) {
            diferenca = sequencia[i] - sequencia[i - 1];
            escadinha++;
        }
    }

    if (n === 1) {
        escadinha = 1;
    }

    print(escadinha);

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