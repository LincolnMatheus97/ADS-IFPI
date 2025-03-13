import { question } from 'readline-sync'

function main() {
    let quantidadeCasos = get_Number();

    while (quantidadeCasos !== 0) {
        let frase = get_Text().split(``);
        let aux = [];
        let diamantes = 0;

        for (let i = 0; i < frase.length; i++) {
            let atual = frase[i];

            if (atual === `<`) {
                aux.unshift(atual);
            } else if (atual === `>` && aux.length > 0) {
                aux.shift();
                diamantes++;
            }
        }
        print(diamantes);
        quantidadeCasos--;
    }
}

function get_Number() {
    return parseInt(question());
}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();