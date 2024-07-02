import { question } from "readline-sync";

function main() {
    let quantidadeCasos = get_Number();

    while(quantidadeCasos != 0) {
        let [refrigerantesComprados, garrafasVazias] = get_Text().split(` `).map(Number);
        let totalGarrafasVazias = (refrigerantesComprados % garrafasVazias) + Math.floor(refrigerantesComprados / garrafasVazias);
        print(totalGarrafasVazias);
        quantidadeCasos--;
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