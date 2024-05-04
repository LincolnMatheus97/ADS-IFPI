import { question } from "readline-sync";

function main() {
    let n = get_Number();
    let x = get_Text().split(" ").map(Number);
    let total = BigInt(0);

    for (let i = 0; i < x.length; i++) {
        total += BigInt(x[i]);
    }

    let atacadas = new Array(n).fill(false);
    let i = 0;

    while (i >= 0 && i < n) {
        let lado = x[i] % 2 !== 0;
        if (x[i] > 0) {
            x[i] -= 1;
            atacadas[i] = true;
            total -= BigInt(1);
        }
        if (lado) {
            i += 1;
        } else {
            i -= 1;
        }
    }

    let estrelasRoubadas = atacadas.filter(atacada => atacada).length;
    print(`${estrelasRoubadas} ${total.toString()}`);
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