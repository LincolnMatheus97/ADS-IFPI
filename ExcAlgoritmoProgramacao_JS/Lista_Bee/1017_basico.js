import { question } from "readline-sync";

function main() {
    const X = get_number();
    const Y = get_number();

    let litros = Calcular_Consumo(X, Y);

    print(`${litros.toFixed(3)}`);
}

function get_number() {
    return (question(`Numero: `));
}

function print(texto) {
    return console.log(texto);
}

function Calcular_Consumo(a, b) {
    let consumo_base = 12;

    return (b / consumo_base) * a;
}
main();