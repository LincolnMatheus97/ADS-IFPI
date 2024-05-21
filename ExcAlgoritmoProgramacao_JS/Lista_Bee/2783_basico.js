import { question } from "readline-sync";

function main() {
    let [numFigurinhas, figurinhasCarimbadas, figurinhasCompradas] = get_Text().split(` `).map(Number);

    let conjuntoFigCarimbadas = get_Text().split(` `);
    let conjuntoFigCompradas = get_Text().split(` `);

    for (let i = 0; i < figurinhasCompradas; i++) {
        if (conjuntoFigCarimbadas.includes(conjuntoFigCompradas[i])) {
            let indexConjuntoFigCarimbada = conjuntoFigCarimbadas.indexOf(conjuntoFigCompradas[i]);
            if (indexConjuntoFigCarimbada !== -1) {
                conjuntoFigCarimbadas.splice(indexConjuntoFigCarimbada, 1);
            }
            figurinhasCarimbadas--;

        }
    }
    print(figurinhasCarimbadas);

}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();