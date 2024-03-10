import { question } from "readline-sync";

function main() {
    const entrada = get_number();

    let codigo_quantidade = entrada.split(` `);
    let codigo = parseInt(codigo_quantidade[0]);
    let quantidade = parseInt(codigo_quantidade[1]);

    let total_pagar = Calcular_Conta(codigo, quantidade);

    print(`Total: R$ ${total_pagar}`);
}

function get_number() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

function Calcular_Conta(num1, num2) {
    if (num1 === 1) {
        return (num2 * 4).toFixed(2);
    } else if (num1 === 2) {
        return (num2 * 4.5).toFixed(2);
    } else if (num1 === 3) {
        return (num2 * 5).toFixed(2);
    } else if (num1 === 4) {
        return (num2 * 2).toFixed(2);
    }

    return (num2 * 1.5).toFixed(2);
}

main();