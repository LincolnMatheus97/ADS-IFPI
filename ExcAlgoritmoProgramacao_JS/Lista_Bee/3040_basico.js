import { question } from "readline-sync";

function main() {
    let quantidadeCasos = get_Number();

    while (quantidadeCasos != 0) {
        let [altura, espessura, galhos] = get_Text().split(` `).map(Number);
        let compro = `Nao`;
        if ((altura >= 200 && altura <= 300) && (espessura >= 50) && (galhos >= 150)) {
            compro = `Sim`;

        }

        print(compro);
        quantidadeCasos--;
        
    }
}

function get_Text() {
    return question();
}

function get_Number() {
    return Number(question());
}

function print(texto) {
    return console.log(texto);
}

main();