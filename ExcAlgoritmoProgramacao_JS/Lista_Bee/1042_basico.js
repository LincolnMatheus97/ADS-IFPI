import { question } from "readline-sync";

function main() {
    const valores = get_number();

    let Nvalores = valores.split(` `);
    let valor1 = parseFloat(Nvalores[0]);
    let valor2 = parseFloat(Nvalores[1]);
    let valor3 = parseFloat(Nvalores[2]);

    const ordem = Ordem_Crescente(valor1, valor2, valor3);
    print(`${ordem[0]}`);
    print(`${ordem[1]}`);
    print(`${ordem[2]}`);
    print(``);
    print(`${valor1}`);
    print(`${valor2}`);
    print(`${valor3}`);

}

function get_number() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

function Ordem_Crescente(num1, num2, num3) {
    let crescente;

    if (num1 < num2 && num1 < num3) {
        if (num2 < num3) {
            crescente = [num1, num2, num3];
        } else {
            crescente = [num1, num3, num2];
        }
    } else if (num2 < num1 && num2 < num3) {
        if (num1 < num3) {
            crescente = [num2, num1, num3];
        } else {
            crescente = [num2, num3, num1];
        }
    } else if (num3 < num1 && num3 < num2) {
        if (num2 < num1) {
            crescente = [num3, num2, num1];
        } else {
            crescente = [num3, num1, num2];
        }
    }
    return crescente;
}

main();