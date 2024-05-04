import { question } from "readline-sync";

function main() {
    let ladosComprimentos = get_Text().split(` `).map(Number);
    let perimetro = ladosComprimentos[0] * ladosComprimentos[1];
    print(perimetro);

}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();