import { question } from "readline-sync";

function main() {
    const valores = get_number();

    const Nvalores = valores.split(` `);
    let A = parseFloat(Nvalores[0]);
    let B = parseFloat(Nvalores[1]);
    let C = parseFloat(Nvalores[2]);

    let triangulo = Area_Triangulo(A, C);
    let circulo = Area_Circulo(C);
    let trapezio = Area_Trapezio(A, B, C);
    let quadrado = Area_Quadrado(B);
    let retangulo = Area_Retangulo(A, B);

    print(`TRIANGULO: ${triangulo.toFixed(3)}`);
    print(`CIRCULO: ${circulo.toFixed(3)}`);
    print(`TRAPEZIO: ${trapezio.toFixed(3)}`);
    print(`QUADRADO: ${quadrado.toFixed(3)}`);
    print(`RETANGULO: ${retangulo.toFixed(3)}`);
}

function get_number() {
    return (question(`Numero: `));
}

function print(texto) {
    return console.log(texto);
}

function Area_Triangulo(A, C) {
    return (A * C) / 2;
}

function Area_Circulo(C) {
    let pi = 3.14159;

    return pi * (C ** 2);
}

function Area_Trapezio(A, B, C) {
    return ((A + B) * C) / 2;
}

function Area_Quadrado(B) {
    return B ** 2;
}

function Area_Retangulo(A, B) {
    return A * B;
}
main();