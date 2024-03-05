import { question } from "readline-sync";

function main() {
    const km = get_number();

    let tempo = Calcular_Tempo(km);

    print(`${tempo} minutos`);
}

function get_number() {
    return Number(question(`Kilometros: `));
}

function print(texto) {
    return console.log(texto);
}

function Calcular_Tempo(num) {
    return num * 2;
}

main();