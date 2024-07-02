import { question } from "readline-sync";

function main() {
    let quantidadeCasos = get_Number();

    while(quantidadeCasos != 0) {
        let caso = get_Number();
        caso > 8_000 ? print(`Mais de 8000!`) : print(`Inseto!`);
        quantidadeCasos--;

    }

}

function get_Number() {
    return Number(question());
}

function print(texto) {
    return console.log(texto);
}

main();