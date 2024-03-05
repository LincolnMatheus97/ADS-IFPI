import { question } from "readline-sync";

function main() {
    const A = get_number();
    const B = get_number();
    const C = get_number();

    let percentil = 15;
    let comissao = Percentual(C, percentil);
    let salario_total = B + comissao;

    print(`TOTAL = R$ ${salario_total.toFixed(2)}`);
}

function get_number() {
    return Number(question(`Numero: `));
}

function print(texto) {
    return console.log(texto);
}

function Percentual(valor, Percentil) {
    return valor * (Percentil / 100);
}

main();