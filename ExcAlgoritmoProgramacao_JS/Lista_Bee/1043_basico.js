import { question } from "readline-sync";

function main() {
    const valores = get_number();

    let Nvalores = valores.split(` `);
    let A = parseFloat(Nvalores[0]);
    let B = parseFloat(Nvalores[1]);
    let C = parseFloat(Nvalores[2]);

    if (Eh_Triangulo(A, B, C)) {
        const perimetro = Calcular_Perimetro(A, B, C);
        print(`Perimetro = ${perimetro.toFixed(1)}`);
    } else {
        const area = Calcular_Area(A, B, C);
        print(`Area = ${area.toFixed(1)}`);
    }
}

function get_number() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

function Eh_Triangulo(num1, num2, num3) {
    return (num1 + num2 > num3 && num1 + num3 > num2 &&
        num2 + num3 > num1);
}

function Calcular_Perimetro(num1, num2, num3) {
    return (num1 + num2 + num3);
}

function Calcular_Area(num1, num2, num3) {
    return (((num1 + num2) * num3) / 2);
}

main();