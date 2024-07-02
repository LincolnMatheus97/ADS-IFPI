import { question } from "readline-sync";

function main() {
    let quantidadeCasos = get_Number();
    let quantidadeGanha = 0;

    while(quantidadeCasos != 0) {
        let caso = get_Number();

        if(caso != 1) {
            quantidadeGanha++;
        }

        quantidadeCasos--;

    }

    print(quantidadeGanha);

}

function get_Number() {
    return Number(question());
}

function print(texto) {
    return console.log(texto);
}

main();