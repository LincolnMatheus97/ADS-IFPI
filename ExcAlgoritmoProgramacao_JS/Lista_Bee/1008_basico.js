import { question } from "readline-sync";

function main() {
    const A = get_number();
    const B = get_number();
    const C = get_number();

    let numero = A;
    let salario = Calculo_Salario(B, C);

    print(`NUMBER = ${numero}`);
    print(`SALARY = U$ ${salario.toFixed(2)}`);
}

function get_number() {
    return Number(question(`Numero: `));
}

function print(texto) {
    return console.log(texto);
}

function Calculo_Salario(B, C) {
    let salario;

    salario = B * C;

    return salario;
}

main();