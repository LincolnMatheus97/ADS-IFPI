import { question } from "readline-sync";

function main() {
    const A = get_number();
    const B = get_number();

    const pA = A.split(` `);
    const pb = B.split(` `);
    let produtoA = parseInt(pA[1]) * parseFloat(pA[2]);
    let produtoB = parseInt(pb[1]) * parseFloat(pb[2]);

    let total_pagar = Calcular_Total(produtoA, produtoB);

    print(`VALOR A PAGAR: R$ ${total_pagar.toFixed(2)}`);
}

function get_number() {
    return (question(`Numero: `));
}

function print(texto) {
    return console.log(texto);
}

function Calcular_Total(produtoA, produtoB) {
    let total;

    total = produtoA + produtoB;

    return total;
}
main();