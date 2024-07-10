import { question } from "readline-sync";

function main() {
    const [numeroAnoes, distanciaMontanha] = get_Text().split(` `).map(Number);
    const quantidadeDias = distanciaMontanha / (numeroAnoes + 2);
    print(quantidadeDias.toFixed(2));

}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();