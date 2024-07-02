import { question } from "readline-sync";

function main() {
    const letraEscolhida = get_Text().toUpperCase();
    const listaAlfabetica = [];

    for (let i = 65; i <= 90; i++) {
        let letra = String.fromCharCode(i);
        listaAlfabetica.push(letra);
    }

    const posicaoDaLetra = listaAlfabetica.findIndex(letra => letra === letraEscolhida);

    print(`${posicaoDaLetra + 1}` );

}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();