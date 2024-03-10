import { question } from "readline-sync";

function main() {
    const X = get_number();
    const Y = get_number();

    let consumo_medio = Calcular_Consumo(X, Y);

    print(`${consumo_medio.toFixed(3)} km/l`);
}

function get_number() {
    return (question(`Numero: `));
}

function print(texto) {
    return console.log(texto);
}

function Calcular_Consumo(a, b) {
    return (a / b);
}
main();