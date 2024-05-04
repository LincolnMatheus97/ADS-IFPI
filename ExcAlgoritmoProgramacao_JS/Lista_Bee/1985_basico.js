import { question } from "readline-sync";

function main() {
    const N = get_Number();
    let totalDaCompra = 0;

    for (let i = 0; i < N; i++) {
        let pedido = get_Text().split(` `);
        let quantidade = parseInt(pedido[1]);

        if (pedido[0] === `1001`) {
            totalDaCompra += 1.5 * quantidade;
        } else if (pedido[0] === `1002`) {
            totalDaCompra += 2.5 * quantidade;
        } else if (pedido[0] === `1003`) {
            totalDaCompra += 3.5 * quantidade;
        } else if (pedido[0] === `1004`) {
            totalDaCompra += 4.5 * quantidade;
        } else if (pedido[0] === `1005`) {
            totalDaCompra += 5.5 * quantidade;
        }
    }
    print(`${totalDaCompra.toFixed(2)}`);
}

function get_Number() {
    return Number(question());
}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();