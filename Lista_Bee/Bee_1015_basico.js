import { question } from "readline-sync";

function main() {
    const valores1 = get_number();
    const valores2 = get_number();

    const Nvalores1 = valores1.split(` `);
    const Nvalores2 = valores2.split(` `);
    let x1 = parseFloat(Nvalores1[0]);
    let y1 = parseFloat(Nvalores1[1]);
    let x2 = parseFloat(Nvalores2[0]);
    let y2 = parseFloat(Nvalores2[1]);

    let distancia = Calcular_Distancia(x1, y1, x2, y2);

    print(`${distancia.toFixed(4)}`);
}

function get_number() {
    return (question(`Numero: `));
}

function print(texto) {
    return console.log(texto);
}

function Calcular_Distancia(a, b, c, d) {
    return Math.sqrt((c - a) ** 2 + (d - b) ** 2);
}

main();