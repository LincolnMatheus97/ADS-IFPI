import { question } from "readline-sync";

function main() {
    let valores = get_Text().split(` `);
    let valorAntigo = parseFloat(valores[0]);
    let valorNovo = parseFloat(valores[1]);

    let porcentagem = (valorNovo * 100) / valorAntigo;

    print(`${(porcentagem - 100).toFixed(2)}%`);

}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();