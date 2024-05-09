import { question } from "readline-sync";

function main() {
    let quantidadePatinho = get_Number();

    while (quantidadePatinho !== -1n) {
        if (quantidadePatinho !== 0n) {
            print(`${quantidadePatinho - 1n}`);
        } else {
            print(0);
        }
        quantidadePatinho = get_Number();
    }
}

function get_Number() {
    return BigInt(question());
}

function print(texto) {
    return console.log(texto);
}

main();