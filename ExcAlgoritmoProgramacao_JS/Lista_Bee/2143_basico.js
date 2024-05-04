import { question } from "readline-sync";

function main() {
    let t = get_Number();

    while (t > 0) {
        for (let i = 1; i <= t; i++) {
            let n = get_Number();
            let quantidaPedidos = 0;
            if (n % 2 === 0) {
                quantidaPedidos = 2 * n - 2;
                print(quantidaPedidos);
            } else {
                quantidaPedidos = Math.floor(n / 2) * 4 + 1;
                print(quantidaPedidos);
            }
        }

        t = get_Number();
    }
}

function get_Number() {
    return Number(question());
}

function print(texto) {
    return console.log(texto);
}

main();