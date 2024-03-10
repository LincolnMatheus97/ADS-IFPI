import { question } from "readline-sync";

function main() {
    const entradas = get_number();

    let valores = entradas.split(` `);
    let A = parseFloat(valores[0]);
    let B = parseFloat(valores[1]);
    let C = parseFloat(valores[2]);

    if (Equacao_2(A, B, C)) {
        let raizes = Equacao_2(A, B, C);
        print(`R1 = ${raizes[0]}`);
        print(`R2 = ${raizes[1]}`);
    } else {
        print(`Impossivel calcular`);
    }
}

function get_number() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

function Equacao_2(num1, num2, num3) {
    let delta = (num2 ** 2) - 4 * (num1) * (num3);

    if (delta > 0 && num1 !== 0) {
        let R1 = ((-(num2) + Math.sqrt(delta)) / (2 * num1));
        let R2 = ((-(num2) - Math.sqrt(delta)) / (2 * num1));

        return [R1.toFixed(5), R2.toFixed(5)];
    } else {
        return false;
    }
}

main();