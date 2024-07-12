import { question } from "readline-sync";

function main() {
    let quantidadeCaso = get_Number();

    for (let i = 1; i <= quantidadeCaso; i++) {
        let resposta = get_Number();
        print(`resposta ${i}: ${resposta}`);

    }

}

function get_Number() {
    return Number(question());
}

function print(texto) {
    return console.log(texto);
}

main();