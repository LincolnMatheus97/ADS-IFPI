import { question } from "readline-sync";

function main() {
    const r = get_number();

    const pi = 3.14159;
    let volume = Calcular_Volume(pi, r);

    print(`VOLUME = ${volume.toFixed(3)}`);
}

function get_number() {
    return Number(question(`Raio: `));
}

function print(texto) {
    return console.log(texto);
}

function Calcular_Volume(pi, r) {
    return ((4/3) * pi * (r ** 3));
}

main();