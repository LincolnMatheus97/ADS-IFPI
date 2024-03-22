import { question } from "readline-sync";

function main() {
    const N = get_number();
    let contador = 1;
    let min = 1;

    while (contador <= N) {

        Calcular_PUM(min);
        min += 4;
        contador++;
    }
}

function get_number() {
    return parseInt(question());
}

function print(texto) {
    return console.log(texto);
}

function Calcular_PUM(num) {
    let numero = num;
    let contador = 1;
    let mensagem = ``;

    while (contador <= 3) {
        mensagem += `${numero} `
        numero++;
        contador++;
    }
    mensagem += `PUM`;
    print(mensagem);
}
main();