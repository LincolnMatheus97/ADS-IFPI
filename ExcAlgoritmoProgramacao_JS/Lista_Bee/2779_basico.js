import { question } from "readline-sync";

function main() {
    let figurinhasFaltando = get_Number();
    let figurinhasCompradas = get_Number();
    const COLECAO = [];

    for (let i = 0; i < figurinhasCompradas; i++) {
        let figurinha = get_Text();
        if (!COLECAO.includes(figurinha)) {
            COLECAO.push(figurinha);
        }

    }
    print(`${figurinhasFaltando - COLECAO.length}`);

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