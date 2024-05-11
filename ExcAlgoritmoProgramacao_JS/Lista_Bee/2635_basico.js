import { question } from "readline-sync";

function main() {
    let n = get_Number();
    let palavras = [];

    for (let i = 0; i < n; i++) {
        palavras.push(get_Text());
    }

    let q = get_Number();

    for (let i = 0; i < q; i++) {
        let consulta = get_Text();
        let sugestoes = palavras.filter(palavra => palavra.startsWith(consulta));

        if (sugestoes.length > 0) {
            let maior = Math.max(...sugestoes.map(palavra => palavra.length));
            print(`${sugestoes.length} ${maior}`);
        } else {
            print(`-1`);
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