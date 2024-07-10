import { question } from "readline-sync";

function main() {
    const raio = get_Number();
    const PI = 3.14;
    const valorCircunferencia = 2 * PI * raio;
    print(valorCircunferencia.toFixed(2));

}

function get_Number() {
    return Number(question());
}

function print(texto) {
    return console.log(texto);
}

main();